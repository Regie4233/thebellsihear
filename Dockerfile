# Use an official Node.js runtime as a parent image
FROM node:20-slim AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Use a smaller image for the production environment
FROM node:20-slim AS runner

# Set the working directory in the container
WORKDIR /app

# Copy the standalone output from the builder stage
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/public ./public
COPY --from=base /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 8988
ENV PORT=8988
# Set the command to run the application
CMD ["node", "server.js"]
