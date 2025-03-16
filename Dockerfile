# Use an official Node.js runtime as a base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /kaur_ravneet_ui_garden_build_checks

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Husky to enable Git hooks
RUN npx husky install

# Copy the rest of the source files
COPY . .

# Run pre-commit checks
RUN npm run lint
RUN npm run test
RUN npm run format

# Build the React component library
RUN npm run build

# Set the environment variable
ENV PORT=8018
EXPOSE 8018

# Default command to run when starting the container
CMD ["npm", "run", "storybook"]
