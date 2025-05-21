import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import {
  DSM_FORGOT_OTP_NAV,
  DSM_SIGN_UP_OTP_NAV,
  DSM_TOKEN,
  IS_PROD,
} from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

const {
  LOGIN,
  GET_STARTED,
  INVITATION,
  ORGANIZATION,
  INVITE_EMPLOYEE,
  VERIFICATION,
} = routes;

const protectedRoutes: string[] = [
  INVITATION,
  GET_STARTED,
  ORGANIZATION,
  INVITE_EMPLOYEE,
];

const OTP_COOKIES = [DSM_SIGN_UP_OTP_NAV, DSM_FORGOT_OTP_NAV];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookieStore = await cookies();
  const token = cookieStore.get(DSM_TOKEN);

  if (isProtectedRoute && !token) {
    const isInvitation = path === INVITATION;
    if (isInvitation) {
      return NextResponse.redirect(
        new URL(`${LOGIN}${request.nextUrl.search}`, request.nextUrl)
      );
    }
    return NextResponse.redirect(new URL(LOGIN, request.nextUrl));
  }
  const isLeavingVerification = path !== VERIFICATION;
  const presentOtpCookie = OTP_COOKIES.find((indvCookie) =>
    cookieStore.get(indvCookie)
  );

  if (isLeavingVerification && presentOtpCookie) {
    const response = NextResponse.next();
    response.cookies.set(presentOtpCookie, "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
      secure: IS_PROD,
      sameSite: "strict",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
