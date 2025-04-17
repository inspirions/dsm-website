"use client";

import { useEffect, useRef } from "react";

import { Box } from "@mantine/core";

import { DSM_HERO_ANIMATION } from "@/constants/dataTestId";

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Animation variables
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    // Create particles
    const createParticles = () => {
      const particleCount = 30;
      const colors = ["#3b82f6", "#10b981", "#8b5cf6"];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw mockup UI
      drawMockupUI();

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(drawParticles);
    };

    // Draw mockup UI
    const drawMockupUI = () => {
      const width = canvas.width * 0.8;
      const height = canvas.height * 0.8;
      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      // Draw app frame
      ctx.fillStyle = "#f8fafc";
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, 10);
      ctx.fill();
      ctx.stroke();

      // Draw header
      ctx.fillStyle = "#f1f5f9";
      ctx.beginPath();
      ctx.roundRect(x, y, width, height * 0.15, [10, 10, 0, 0]);
      ctx.fill();

      // Draw content sections
      const contentY = y + height * 0.2;
      const contentHeight = height * 0.7;

      // Draw left sidebar
      ctx.fillStyle = "#f1f5f9";
      ctx.beginPath();
      ctx.roundRect(x + width * 0.05, contentY, width * 0.25, contentHeight, 5);
      ctx.fill();

      // Draw main content area
      ctx.fillStyle = "#f8fafc";
      ctx.beginPath();
      ctx.roundRect(x + width * 0.35, contentY, width * 0.6, contentHeight, 5);
      ctx.fill();

      // Draw some lines for text
      ctx.fillStyle = "#cbd5e1";
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.roundRect(
          x + width * 0.4,
          contentY + i * 25 + 20,
          width * 0.5,
          8,
          4
        );
        ctx.fill();
      }

      // Draw chart
      ctx.fillStyle = "#bfdbfe";
      ctx.beginPath();
      ctx.roundRect(x + width * 0.4, contentY + 150, width * 0.5, 100, 4);
      ctx.fill();
    };

    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <Box
      pos="relative"
      w="100%"
      maw={600}
      style={{ aspectRatio: "4/3" }}
      data-testid={DSM_HERO_ANIMATION}
    >
      <Box
        component="canvas"
        ref={canvasRef}
        w="100%"
        h="100%"
        style={{
          borderRadius: "var(--mantine-radius-lg)",
          boxShadow: "var(--mantine-shadow-xl)",
        }}
      />
    </Box>
  );
}
