# Use a better base image (fixes file watching)
FROM node:18-bullseye

# Set working directory inside 'app' (matches your local structure)
WORKDIR /app

# Copy package.json first for efficient caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy everything (app folder included)
COPY . . 

# Expose Next.js port
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=development

# Run Next.js in dev mode
CMD ["npm","run","dev"]