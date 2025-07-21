import { Box, Container, Flex, lighten, Text } from "@mantine/core";

import { Navbar } from "@/components/ui/resizable-navbar";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

export interface TitleContentTextPropsType {
  content: string;
  title?: string;
  hasTitle?: boolean;
}

const TitleContentText = ({
  title,
  content,
  hasTitle = true,
}: TitleContentTextPropsType) => (
  <Flex pl="lg" gap="sm" align="center">
    <DsmCustomIcon icon="dot" />
    <Text>
      {hasTitle && (
        <Text span inherit fw="bold">
          {title}:{" "}
        </Text>
      )}
      {content}
    </Text>
  </Flex>
);

const PrivacyPolicy = () => {
  return (
    <Box c="white" bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}>
      <Navbar />
      <Container size="xl" pt="32px">
        <Flex direction="column" gap="lg" pb="lg">
          <Text fw="bold" lh={1.3} size="36px" ta="center">
            Privacy Policy
          </Text>
          <Text fs="italic">Effective Date: July 21, 2025</Text>
          <Text>
            Thank you for choosing DailySync.AI (“<b>DailySync.AI</b>”, “
            <b>we</b>”, “<b>our</b>”, or “<b>us</b>”). Your privacy is important
            to us. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your information when you use our website and
            services.
          </Text>
          <Text>
            By accessing or using DailySync.AI (the “<b>Platform</b>”), you
            agree to the practices described in this Privacy Policy. If you do
            not agree, please do not use the Platform.
          </Text>
          <Text fw="bold" size="24px">
            1. Information We Collect
          </Text>
          <Text>
            We collect information to provide better services to all our users.
            The types of information we collect include:
          </Text>
          <Text fw="bold" size="20px">
            A. Information You Provide
          </Text>
          <TitleContentText
            title="Personal Information"
            content="Name, email address, company name, phone number, job title."
          />
          <TitleContentText
            title="Team Data"
            content="Meeting notes, summaries, task follow-ups, and team member inputs shared via the platform."
          />
          <TitleContentText
            title="Support Communication"
            content="When you reach out for support, we collect any additional information you choose to provide."
          />
          <Text fw="bold" size="20px">
            B. Information We Collect Automatically
          </Text>
          <TitleContentText
            title="Usage Data"
            content="Log-in/out time, features used, pages visited."
          />
          <TitleContentText
            title="Device Information"
            content="Browser type, IP address, OS version."
          />
          <TitleContentText
            title="Cookies and Tracking Technologies"
            content="Used to enhance user experience and monitor performance."
          />
          <Text fw="bold" size="20px">
            C. Information from Third Parties
          </Text>
          <Text>
            We may receive information from services you integrate with (e.g.,
            calendar or collaboration tools), only to the extent necessary for
            core platform functionality.
          </Text>
          <Text fw="bold" size="24px">
            2. How We Use Your Information
          </Text>
          <Text>We use your data to:</Text>
          <TitleContentText
            hasTitle={false}
            content="Deliver and improve the DailySync.AI service."
          />
          <TitleContentText
            hasTitle={false}
            content="Automatically generate meeting summaries and action items."
          />
          <TitleContentText
            hasTitle={false}
            content="Personalize and enhance user experience."
          />
          <TitleContentText
            hasTitle={false}
            content="Communicate service updates or respond to support requests."
          />
          <TitleContentText
            hasTitle={false}
            content="Monitor usage and prevent abuse."
          />
          <TitleContentText
            hasTitle={false}
            content="Comply with legal obligations."
          />
          <Text fw="bold" size="24px">
            3. How We Share Your Information
          </Text>
          <Text>
            We do not sell your personal data. However, we may share it in the
            following situations:
          </Text>
          <TitleContentText
            title="With Service Providers"
            content="Vendors supporting hosting, analytics (e.g., Google Analytics), or customer service."
          />
          <TitleContentText
            title="With Your Consent"
            content="When you explicitly give us permission."
          />
          <TitleContentText
            title="To Protect Rights & Comply with Law"
            content="Including responding to legal requests and enforcing our Terms of Service."
          />
          <TitleContentText
            title="Business Transfers"
            content="In case of a merger, acquisition, or asset sale."
          />
          <Text fw="bold" size="24px">
            4. Cookies and Tracking
          </Text>
          <Text>DailySync.AI uses cookies and similar technologies to:</Text>
          <TitleContentText
            hasTitle={false}
            content="Maintain your session and login state."
          />
          <TitleContentText
            hasTitle={false}
            content="Track usage and improve features."
          />
          <TitleContentText
            hasTitle={false}
            content="Analyze site traffic using tools like Google Analytics."
          />
          <Text>
            You may disable cookies in your browser settings, but doing so may
            affect certain functionalities.
          </Text>
          <Text fw="bold" size="24px">
            5. Data Retention and Security
          </Text>
          <Text>
            We retain your data as long as needed for legitimate business
            purposes or as required by law. We employ administrative and
            technical safeguards to protect your information, but no system is
            entirely secure.
          </Text>
          <Text fw="bold" size="24px">
            6. International Data Transfers
          </Text>
          <Text>
            If you access DailySync.AI from outside our operating country, your
            data may be transferred and processed in a country with different
            data protection laws. We ensure appropriate safeguards are in place.
          </Text>
          <Text fw="bold" size="24px">
            7. Children's Privacy
          </Text>
          <Text>
            DailySync.AI is not intended for children under the age of 13. We do
            not knowingly collect personal information from children.
          </Text>
          <Text fw="bold" size="24px">
            8. Changes to This Privacy Policy
          </Text>
          <Text>
            We may revise this Privacy Policy occasionally. Any changes will be
            posted on this page with an updated effective date. Continued use of
            the platform after changes means you accept the revised policy.
          </Text>
          <Text fw="bold" size="24px">
            9. Contact Us
          </Text>
          <Text>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact:
          </Text>
          <Flex direction="column">
            <Flex align="center" gap="6px">
              <DsmCustomIcon icon="email" />
              <Text>
                <Text span fw="bold">
                  Email:{" "}
                </Text>
                mailto:support@dailysync.ai
              </Text>
            </Flex>
            <Flex align="center" gap="6px">
              <DsmCustomIcon icon="world" />
              <Text>
                <Text span fw="bold">
                  Website:{" "}
                </Text>
                https://dailysync.ai/
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
