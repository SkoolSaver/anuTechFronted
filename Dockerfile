# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json* ./

# Step 4: Install the dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the project files into the container
COPY . .

# Step 6: Build the Next.js project
RUN npm run build

# Step 7: Expose port 3000 (default port for Next.js)
EXPOSE 3000

# Step 8: Start the Next.js application
CMD ["npm", "start"]
