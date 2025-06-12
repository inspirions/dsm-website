# ================================
# 1. Dependencies Stage (deps)
# ================================
FROM node:22-alpine AS deps

# Set working directory inside container
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only the lockfile and package.json to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies without dev packages
RUN pnpm install --frozen-lockfile

# ================================
# 2. Build Stage (builder)
# ================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm again for this stage
RUN npm install -g pnpm

# Copy everything into the image
COPY . .

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the Next.js app
RUN pnpm build

# ================================
# 3. Runtime Stage (runner)
# ================================
FROM node:22-alpine AS production

WORKDIR /app

RUN npm install -g pnpm

ENV NODE_ENV=production

# Copy only necessary files for running the app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port used by Next.js
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
