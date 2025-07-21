import { Navbar } from "@/components/ui/resizable-navbar";
import { Box, Container, Flex, lighten, Text } from "@mantine/core";
import Link from "next/link";

const Terms = () => {
  return (
    <Box c="white" bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}>
      <Navbar />
      <Container size="xl" pt="32px">
        <Flex direction="column" gap="lg" pb="lg">
          <Text fw="bold" lh={1.3} size="36px" ta="center">
            Terms and Conditions
          </Text>
          <Text fs="italic">Effective Date: July 21, 2025</Text>
          <Text>
            These Terms and Conditions (the "Agreement") constitute a legally
            binding agreement between you ("you", "user", or "End-User") and
            DailySync.AI, operated by Inspiring Lab LLC, Wyoming, concerning
            your access to and use of the DailySync.AI web application (the
            “Platform” or “Software”).
          </Text>
          <Text>
            By accessing or using the Software, you confirm that you have read,
            understood, and agreed to be bound by this Agreement. If you do not
            agree, do not access or use the Platform.
          </Text>
          <Text fw="bold" size="20px">
            1. THE SOFTWARE
          </Text>
          <Text>
            <b>1.1. DailySync.AI</b> is a browser-based SaaS platform designed
            to facilitate and streamline daily standups for teams. It uses
            AI-driven summarization to convert conversations into structured
            meeting notes, summaries, and follow-ups.
          </Text>
          <Text>
            <b>1.2. DailySync.AI</b> is designed to be flexible and adaptable
            across various organizational needs. While it is not currently
            certified for regulatory frameworks such as HIPAA, GLBA, or FISMA,
            we empower you with the tools to configure and use the platform in
            ways that align with your local legal and compliance requirements.
            We encourage you to ensure that your use of DailySync.AI adheres to
            any applicable regulations in your jurisdiction.
          </Text>
          <Text fw="bold" size="20px">
            2. LICENSE
          </Text>
          <Text>
            2.1. You are granted a non-exclusive, non-transferable,
            non-sublicensable license to use the Software solely for internal
            business use.
          </Text>
          <Text>2.2. You may not:</Text>
          <Flex direction="column" gap="lg" pl="md">
            <Text>
              Reverse-engineer, modify, adapt, disassemble, or derive source
              code from the Software.
            </Text>
            <Text>
              Copy, distribute, or publicly display any part of the Software
              without prior written permission.
            </Text>
            <Text>
              Use the Software for unlawful purposes or in violation of this
              Agreement.
            </Text>
          </Flex>
          <Text>
            2.3. All intellectual property rights remain with DailySync.AI and
            its licensors.
          </Text>
          <Text fw="bold" size="20px">
            3. TECHNICAL REQUIREMENTS
          </Text>
          <Text>
            3.1. The Software requires a modern web browser and a stable
            internet connection.
          </Text>
          <Text>
            3.2. It is your responsibility to ensure that your environment meets
            the minimum technical requirements for optimal use.
          </Text>
          <Text fw="bold" size="20px">
            4. SUPPORT AND MAINTENANCE
          </Text>
          <Text>
            DailySync.AI may provide support via email at:
            [support@dailysync.ai]. We reserve the right to update, modify, or
            discontinue support at any time.
          </Text>
          <Text fw="bold" size="20px">
            5. DATA AND PRIVACY
          </Text>
          <Text>
            5.1. By using the Software, you consent to the collection and use of
            your data in accordance with our Privacy Policy{" "}
            <Link href="/privacy-policy" className="hover:text-gray-300">
              here.
            </Link>
          </Text>
          <Text>
            5.2. AI-generated summaries and structured insights are processed
            securely, but may be stored temporarily for service improvement
            purposes.
          </Text>
          <Text fw="bold" size="20px">
            6. USER CONTENT
          </Text>
          <Text>
            6.1. Users may submit data during standups, which the AI will
            process. You are responsible for ensuring that such data:
          </Text>
          <Flex direction="column" gap="lg" pl="md">
            <Text>
              - does not contain unlawful, harmful, or inappropriate content.
            </Text>
            <Text>
              - does not violate the privacy or intellectual property rights of
              others.
            </Text>
          </Flex>
          <Text>
            6.2. You retain ownership of your content, but grant DailySync.AI a
            limited license to process and display it within the platform for
            service delivery purposes.
          </Text>
          <Text fw="bold" size="20px">
            7. LIMITATION OF LIABILITY
          </Text>
          <Text>
            To the fullest extent permitted by law, DailySync.AI shall not be
            liable for:
          </Text>
          <Flex direction="column" gap="lg" pl="md">
            <Text>Any indirect, incidental, or consequential damages.</Text>
            <Text>
              Loss of profits, data, or business interruption arising from your
              use of the Software.
            </Text>
          </Flex>
          <Text fw="bold" size="20px">
            8. DISCLAIMER OF WARRANTIES
          </Text>
          <Text>
            The Software is provided “as is” and “as available”. We make no
            warranties, express or implied, regarding:
          </Text>
          <Flex direction="column" gap="lg" pl="md">
            <Text>Availability or uninterrupted access.</Text>
            <Text>Accuracy or reliability of AI-generated outputs.</Text>
            <Text>
              Compatibility with third-party project management tools.
            </Text>
          </Flex>
          <Text fw="bold" size="20px">
            9. TERMINATION
          </Text>
          <Text>9.1. This Agreement remains in effect until terminated.</Text>
          <Text>
            9.2. You may terminate it by discontinuing use of the Software.
          </Text>
          <Text>
            9.3. We may suspend or terminate your access at any time if you
            breach this Agreement or at our sole discretion.
          </Text>
          <Text fw="bold" size="20px">
            10. THIRD-PARTY TOOLS & LIMITATIONS
          </Text>
          <Text>
            10.1. DailySync.AI currently has limited integrations with external
            project management tools. Users are advised to evaluate their
            workflows accordingly.
          </Text>
          <Text fw="bold" size="20px">
            11. INTELLECTUAL PROPERTY
          </Text>
          <Text>
            11.1. All rights in the Software, logos, trademarks, and underlying
            technology remain the sole property of DailySync.AI or its
            licensors.
          </Text>
          <Text>
            11.2. Any feedback or suggestions you provide may be used by us
            without compensation or obligation.
          </Text>
          <Text fw="bold" size="20px">
            12. GOVERNING LAW
          </Text>
          <Text>
            This Agreement shall be governed by the laws of the United States of
            America, without regard to its conflict of law principles.
          </Text>
          <Text fw="bold" size="20px">
            13. CHANGES TO THE AGREEMENT
          </Text>
          <Text>
            We may modify this Agreement from time to time. Updates will be
            posted on our website. Your continued use after changes means you
            accept the revised terms.
          </Text>
          <Text fw="bold" size="20px">
            14. CONTACT
          </Text>
          <Flex direction="column">
            <Text>For questions or concerns, contact us at:</Text>
            <Text>Email: support@dailysync.ai</Text>
            <Text>Address: Inspiring Lab LLC</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Terms;
