# Dockerfile

# Stage 1: Install dependencies and build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Create a production-ready image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public # Copy public files manually if needed

# Set the environment variable for production
ENV NODE_ENV production
# Next.js app runs on port 3000 by default
EXPOSE 3000
# Start the production server
CMD ["node", "server.js"]
