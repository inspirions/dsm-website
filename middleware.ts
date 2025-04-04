import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { DSM_TOKEN } from "./constants/commons";

const protectedRoutes = ["/organization"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookieStore = await cookies();
  const token = cookieStore.get(DSM_TOKEN);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
