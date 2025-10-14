# MyPortfolio - A Next.js and Firebase Project

This is a personal portfolio website built with Next.js, a popular React framework, and integrated with Firebase for backend services. This project was initialized and configured in Firebase Studio.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Abhinavnalla19/MyPortfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd MyPortfolio
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`
    Runs the app in development mode with Turbopack. Open [http://localhost:9002](http://localhost:9002) to view it in the browser. The page will reload if you make edits.

*   `npm run build`
    Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   `npm run start`
    Starts a Next.js production server.

*   `npm run lint`
    Runs the Next.js linter to catch common errors and styling issues.

*   `npm run typecheck`
    Runs the TypeScript compiler to check for type errors.

## Key Dependencies

This project uses several key libraries and frameworks:

*   **Next.js:** A React framework for building server-rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **Firebase:** A platform for building web and mobile applications, providing services like authentication, database, and hosting.
*   **Genkit:** A framework for building AI-powered features.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Shadcn/ui:** A collection of reusable UI components.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

## Deployment

This project is configured for deployment to Firebase Hosting. The `classic_firebase_hosting_deploy` tool can be used to deploy the application. The `appType` is `server` as this is a Next.js application with server-side rendering. The build output is in the `.next` directory.
