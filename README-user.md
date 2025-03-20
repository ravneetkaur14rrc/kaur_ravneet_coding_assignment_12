# UC Component Library - Assignment 13

## Overview

This project aims to add code quality checks to the existing build process of the UI component library. The checks will include Prettier for code formatting, ESLint for code linting, and running tests. Additionally, we will integrate these checks into GitHub Actions to ensure continuous integration and continuous delivery (CI/CD) for the repository.

### Key Features:
- *Pre-commit Hooks*: Husky is used to enforce Prettier, ESLint, and tests before code commits.
- *CI/CD Pipeline*: Integrated GitHub Actions to run the same checks on GitHub upon push or pull request.
- *Dockerized App*: The component library is hosted within a Docker container to run on localhost:8018.

## Prerequisites

To complete the assignment and run the application locally, ensure the following tools are installed:
- *Docker* (to build and run the container)
- *Node.js* and *npm* (to install dependencies for the React application)
- *Git* (for version control)

## Instructions

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

bash
git clone https://github.com/ravneetkaur14rrc/kaur_ravneet_coding_assignment_13
cd kaur_ravneet_coding_assignment_13


### Step 2: Install Dependencies

Install the required dependencies for the project:

bash
npm install


### Step 3: Set Up Husky Pre-commit Hooks

Husky is used to add pre-commit hooks that will ensure code quality before commits are made. It will check:

- *Prettier*: Ensures code is properly formatted.
- *ESLint*: Lints the code to ensure code quality.
- *Tests*: Ensures all tests pass before code is committed.

Make sure Husky is installed and configured in your project. You can refer to the guide [How to Add Commit Hooks to Git with Husky](https://github.com/typicode/husky) for more details.

### Step 4: Set Up GitHub Actions

GitHub Actions will run the same checks for every push or pull request to the repository. The workflow file will be located in .github/workflows/ci.yml.

The workflow will include the following checks:
1. *Prettier Check*
2. *ESLint Check*
3. *Test Execution*

For details, refer to [How to build a CI/CD pipeline with GitHub Actions](https://docs.github.com/en/actions).

### Step 5: Build the Docker Image

1. Build the Docker image to host the app on localhost:8018:

bash
docker build -t lastname_firstname_coding_assignment13 .


2. Once the build completes, run the container:

bash
docker run -p 8018:80 lastname_firstname_coding_assignment13


3. Open your browser and navigate to http://localhost:8018 to see the app running.

### Step 6: Final Submission

Once you have completed all steps, ensure the following:

- *Dockerfile*: The Docker container is properly set up and hosts the component library on port 8018.
- *Pre-commit Hooks*: The pre-commit checks (Prettier, ESLint, and tests) are enforced.
- *GitHub Actions*: The CI/CD pipeline is properly set up to run these checks on GitHub.

### Step 7: Submit Your Assignment

Submit the following for evaluation:
- *Dockerfile*
- *README.md* (this file)
- *GitHub repository link*

## Directory Structure


/
|-- .github/
|   |-- workflows/
|       |-- ci.yml
|-- Dockerfile
|-- package.json
|-- README.md
|-- src/
|-- tests/


## Additional Resources

- [How to Add Commit Hooks to Git with Husky](https://github.com/typicode/husky)
- [How to build a CI/CD pipeline with GitHub Actions](https://docs.github.com/en/actions)
- [React + TypeScript + ESLint + Prettier Full Setup](https://www.digitalocean.com/community/tutorials)
- [ESLint + Prettier + Typescript and React in 2022](https://www.smashingmagazine.com)