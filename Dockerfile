# # Use an official Node.js runtime as a parent image
# FROM node:20-slim AS base

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js application for production
# RUN npm run build

# # Use a smaller image for the production environment
# FROM node:20-slim AS runner

# # Set the working directory in the container
# WORKDIR /app

# # Copy the standalone output from the builder stage
# COPY --from=base /app/.next/standalone ./
# COPY --from=base /app/public ./public
# COPY --from=base /app/.next/static ./.next/static

# # Expose the port the app runs on
# EXPOSE 8988
# ENV PORT=8988
# # Set the command to run the application
# CMD ["node", "server.js"]


# ==== Builder Stage ====
# Use an official Node.js runtime as a parent image for building
FROM node:20-slim AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
# to leverage Docker cache for dependencies
COPY package*.json ./
# If using yarn, uncomment the following line and adjust RUN command
# COPY yarn.lock ./
# Declare build-time arguments
ARG NEXT_PUBLIC_PB_URL
#
# Set environment variables from build-time arguments
ENV NEXT_PUBLIC_PB_URL=$NEXT_PUBLIC_PB_URL
# Install dependencies
# Use --frozen-lockfile (npm) or --frozen-lockfile (yarn) for reproducible installs
RUN npm install --frozen-lockfile
# If using yarn:
# RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
# IMPORTANT: Any *build-time* environment variables (like NEXT_PUBLIC_*)
# need to be available here. They can be passed using --build-arg
# and consumed via ARG/ENV in this stage if necessary, or set directly.
# Example: RUN NEXT_PUBLIC_ANALYTICS_ID=xyz npm run build
RUN npm run build
# Note: The build step generates the .next/standalone directory

# ==== Runner Stage ====
# Use a smaller, minimal Node.js image for the final production environment
FROM node:20-slim AS runner

# Set the working directory in the container
WORKDIR /app

# Set Node environment to production
ENV NODE_ENV=production

ENV HOSTNAME=0.0.0.0

# Set a default port. This can be overridden at runtime via `docker run -e PORT=XXXX`
ENV PORT=8988

# --- Optional: Add placeholders for expected runtime ENV variables ---
# This doesn't change functionality but serves as documentation within the Dockerfile
# for variables the application expects at runtime.
# Uncomment and adapt as needed:
# ENV DATABASE_URL=""
# ENV API_SECRET_KEY=""
# ENV EXTERNAL_API_ENDPOINT="https://api.example.com"
# ---------------------------------------------------------------------

# Copy only the necessary artifacts from the builder stage
# Copy the standalone output
COPY --from=base /app/.next/standalone ./
# Copy the public directory
COPY --from=base /app/public ./public
# Copy the static assets directory (usually needed)
COPY --from=base /app/.next/static ./.next/static

# Expose the port the app *inside* the container will listen on.
# This should match the PORT environment variable.
# Actual mapping to the host machine happens with `docker run -p host_port:container_port`
EXPOSE 8988

# Define the command to run the application.
# This executes the Node.js server from the standalone output.
# It will automatically listen on the port specified by the PORT environment variable.
# Runtime environment variables passed via `docker run -e` will be available via `process.env` here.
CMD ["node", "server.js"]