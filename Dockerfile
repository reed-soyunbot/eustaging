# Dockerfile

# Stage 2: Create a production-ready image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the standalone output from the builder stage
COPY /app/build ./


# Set the environment variable for production
ENV NODE_ENV production
# Next.js app runs on port 3000 by default
EXPOSE 3000
# Start the production server
CMD ["npm", "start"]
