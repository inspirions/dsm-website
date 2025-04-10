import Link from "next/link";
import {
  Container,
  Stack,
  Title,
  Text,
  Group,
  SimpleGrid,
  Box,
  Paper,
  ThemeIcon,
  Card,
} from "@mantine/core";
import HeroAnimation from "@/components/hero-animation";
import { DsmButton } from "@/components/DsmButton";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Box
        py={{ base: 80, md: 112 }}
        style={{
          background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
          position: "relative",
        }}
      >
        <Container size="1400px">
          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            spacing={{ base: 24, lg: 48 }}
            style={{ alignItems: "center" }}
          >
            <Stack gap="md">
              <Stack gap="xs">
                <Title
                  order={1}
                  size="h1"
                  fw={700}
                  style={{
                    lineHeight: 1,
                    fontSize: "clamp(1.875rem, 5vw, 3.75rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Transform Your Standup Meetings with AI
                </Title>
                <Text
                  size="xl"
                  c="dimmed"
                  maw={600}
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    lineHeight: 1.5,
                  }}
                >
                  Capture, summarize, and gain insights from your daily
                  standups. Let AI do the heavy lifting.
                </Text>
              </Stack>
              <Group gap="xs" wrap="wrap">
                <Link href="/sign-up" style={{ textDecoration: "none" }}>
                  <DsmButton
                    size="md"
                    bg="blue"
                    iconProps={{ icon: "arrowRight", position: "right" }}
                  >
                    Get Started
                  </DsmButton>
                </Link>
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <DsmButton hideIcon size="md" bg="indigo">
                    Log In
                  </DsmButton>
                </Link>
                <Link href="#features" style={{ textDecoration: "none" }}>
                  <DsmButton hideIcon size="md" variant="outline">
                    Learn More
                  </DsmButton>
                </Link>
              </Group>
            </Stack>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                minHeight: "450px",
              }}
            >
              <HeroAnimation />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ base: 80, md: 100 }} bg="white">
        <Container size="lg" px={{ base: 16, md: 24 }}>
          <Stack align="center" gap="md" mb={48}>
            <Stack gap="xs" align="center">
              <Title
                order={2}
                size="h2"
                fw={700}
                ta="center"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Powerful Features for Productive Teams
              </Title>
              <Text
                size="xl"
                c="dimmed"
                maw={900}
                ta="center"
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                Everything you need to streamline your standup process and keep
                your team aligned.
              </Text>
            </Stack>
          </Stack>
          <SimpleGrid
            cols={{ base: 1, md: 3 }}
            spacing={{ base: 24, lg: 48 }}
            maw={1200}
            mx="auto"
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <DsmCustomIcon icon="message" color="blue" size={40} />
                <Title order={3} size="h3" ta="center">
                  Standup Summaries
                </Title>
                <Text c="dimmed" ta="center">
                  Automatically capture and summarize daily standup meetings,
                  making information accessible to everyone.
                </Text>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <DsmCustomIcon icon="users" color="blue" size={40} />
                <Title order={3} size="h3" ta="center">
                  AI Chat Assistant
                </Title>
                <Text c="dimmed" ta="center">
                  Chat with our AI to get updates about employees, teams, and
                  projects without digging through notes.
                </Text>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <DsmCustomIcon icon="barChart" color="blue" size={40} />
                <Title order={3} size="h3" ta="center">
                  AI Insights
                </Title>
                <Text c="dimmed" ta="center">
                  Generate valuable insights about team productivity, blockers,
                  and progress trends over time.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box py={{ base: 80, md: 100 }} bg="#f8fafc">
        <Container size="lg" px={{ base: 16, md: 24 }}>
          <Stack align="center" gap="md" mb={48}>
            <Stack gap="xs" align="center">
              <Title
                order={2}
                size="h2"
                fw={700}
                ta="center"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                How It Works
              </Title>
              <Text
                size="xl"
                c="dimmed"
                maw={900}
                ta="center"
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                Simple, intuitive, and designed for busy teams.
              </Text>
            </Stack>
          </Stack>
          <SimpleGrid
            cols={{ base: 1, md: 3 }}
            spacing={32}
            maw={1200}
            mx="auto"
          >
            <Stack align="center" gap="xs">
              <ThemeIcon size={48} radius="xl" color="blue">
                1
              </ThemeIcon>
              <Title order={3} size="h3" style={{ fontSize: "1.25rem" }}>
                Record Your Standup
              </Title>
              <Text c="dimmed" ta="center">
                Use our app during your daily standup or integrate with your
                meeting tools.
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <ThemeIcon size={48} radius="xl" color="blue">
                2
              </ThemeIcon>
              <Title order={3} size="h3" style={{ fontSize: "1.25rem" }}>
                AI Generates Summaries
              </Title>
              <Text c="dimmed" ta="center">
                Our AI automatically creates structured summaries of the
                discussion.
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <ThemeIcon size={48} radius="xl" color="blue">
                3
              </ThemeIcon>
              <Title order={3} size="h3" style={{ fontSize: "1.25rem" }}>
                Access Insights Anytime
              </Title>
              <Text c="dimmed" ta="center">
                Chat with the AI to get updates or view generated insights about
                your team.
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={{ base: 80, md: 100 }} bg="white">
        <Container size="lg" px={{ base: 16, md: 24 }}>
          <Stack align="center" gap="md" mb={48}>
            <Stack gap="xs" align="center">
              <Title
                order={2}
                size="h2"
                fw={700}
                ta="center"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Trusted by Teams Everywhere
              </Title>
              <Text
                size="xl"
                c="dimmed"
                maw={900}
                ta="center"
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                See what our users are saying about how our app has transformed
                their workflow.
              </Text>
            </Stack>
          </Stack>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 24, lg: 48 }}
            maw={1200}
            mx="auto"
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Text size="lg" fw={500} fs="italic">
                  "This tool has completely transformed our standup process. We
                  save at least 30 minutes every day and everyone stays
                  informed."
                </Text>
                <Stack gap={0}>
                  <Text fw={600}>Sarah Johnson</Text>
                  <Text size="sm" c="dimmed">
                    Engineering Manager at TechCorp
                  </Text>
                </Stack>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Text size="lg" fw={500} fs="italic">
                  "The AI insights have helped us identify patterns in our
                  workflow that we never noticed before. Game changer for
                  productivity."
                </Text>
                <Stack gap={0}>
                  <Text fw={600}>Michael Chen</Text>
                  <Text size="sm" c="dimmed">
                    Product Lead at InnovateLabs
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 80, md: 100 }} bg="blue">
        <Container size="lg" px={{ base: 16, md: 24 }}>
          <Stack align="center" gap="md">
            <Stack gap="xs" align="center">
              <Title
                order={2}
                size="h2"
                fw={700}
                ta="center"
                c="white"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Ready to Transform Your Standups?
              </Title>
              <Text
                size="xl"
                c="white"
                maw={600}
                ta="center"
                style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                Join thousands of teams who have streamlined their standup
                process with our AI-powered platform.
              </Text>
            </Stack>
            <Group>
              <Link href="/sign-up" style={{ textDecoration: "none" }}>
                <DsmButton
                  size="md"
                  variant="default"
                  iconProps={{ icon: "arrowRight" }}
                >
                  Get Started Free
                </DsmButton>
              </Link>
            </Group>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
