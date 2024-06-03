
# Introducing AI Powered Tone Analyzer and Translator App
Backend - https://github.com/anujaagarwal/Tone-Translator-Backend

The AI-Powered Tone Analyzer and Translator is a simple and effective tool that uses advanced AI to check and change the tone of text to meet specific standards. It helps ensure that all written communication is clear and consistent, making it easier for businesses to talk to their customers effectively. The tool is easy to use and can be quickly integrated into daily business activities to improve how messages are delivered to customers.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Program Design](#program-design)
- [Usecase](#usecase)
- [API Integration](#api-integration)
- [UI related decisions](#ui-related-decisions)
- [Technologies Used](#technologies-used)
- [Known Issues](#known-issues)
- [Future Scope](#future-scope)
- [Deployment](#Deployment)

## Project Overview

Businesses often need to maintain a consistent tone across all their content to align with their brand identity. This tool could automatically adjust content created by different individuals to ensure consistency. For instance, ensuring all blog posts, social media updates, and promotional materials reflect the same brand voice, whether it's friendly, professional, or enthusiastic. 


The application is responsive and works well on various screen sizes. 

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/anujaagarwal/Tone-Translator-Frontend
   ```

2. Navigate to the project directory:

   ```bash
   cd Tone-Translator-Frontend
   ```

3. Install project dependencies:

   ```bash
   npm install

   ```

4. Set you environment variable before starting the application. You can store environment variables under .env.local file of the project.

Environment Variables used are:-

```bash
 VITE_REACT_APP_API_BASE_URL = https://tone-translator-backend.vercel.app/
```

5. Start the development server:

   ```bash
   npm run dev

   ```

6. Open your web browser and access the application at `http://localhost:5173/` you will see the tool.


- **FolderStructure:** Explaining folder structure in 2 to 3 lines. Certainly! In a React.js project, the folder structure is designed to promote an organized and efficient development process. At the root level, you'll typically find essential configuration files such as package.json, tailwindconfig. The src directory contains components Directory. You must have seen "components" directory for reusable React components. This structure not only encourages a component-based architecture but also aligns well .
  Here is the folder structure:-

```bash
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── DisplayResult.jsx
│   │   ├── InputForm.jsx
│   │   └── TimeDisplay.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Usecase:

1. Content Creation and Marketing
Businesses often need to maintain a consistent tone across all their content to align with their brand identity. This tool could automatically adjust content created by different individuals to ensure consistency. For instance, ensuring all blog posts, social media updates, and promotional materials reflect the same brand voice, whether it's friendly, professional, or enthusiastic.

2. Customer Support Automation
In customer support, responses must often adapt to the tone of the customer's inquiry to maintain customer satisfaction and engagement. A system that adjusts the tone of predefined response templates based on the customer's message can make automated systems more personable and effective, enhancing customer experience.

## API Integration

- The frontend communicates with the backend API to analyze and translate the tone and store the request and response in a table.
- API calls are made using the `axios` and `async/await` for asynchronous operations.

## UI related decisions:-

1. I used Tailwind CSS for efficient and consistent UI development, reducing custom CSS and promoting faster project delivery. Also it is really easy to adapt if someone knows CSS.

2. The application is responsive and compatible with various screen sizes and devices, ensuring accessibility for a wide range of users.

## Technologies

- **[React](https://react.dev/):** The JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework that simplifies styling.
- **[Axios](https://axios-http.com/docs/intro):**: For making HTTP requests to the backend.
- **[State Management](https://legacy.reactjs.org/docs/hooks-state.html):**: React's built-in state management.
- **[Vite](https://vitejs.dev/):**: For fast development.
- **[Vercel](https://vercel.com/):**: For fast and easy deployment process.

## Known Issues

- While working on this project, I want to acknowledge that I didn't strictly adhere to the best practices of separating of concerns within React components. The primary reason for this was time constraints and the need to deliver a functional project within the specified timeline.

I understand the importance of maintaining a clear separation of concerns in a well-structured application, where UI components are decoupled from data-fetching and processing. This separation ensures better maintainability, scalability, and reusability of code.



## Future Scope

Future enhancements for the AI-Powered Tone Analyzer and Translator could include:

- Adding the ability to upload text files directly into the AI assistant, allowing it to read and analyze the tone before adjusting subsequent texts to match this style.
- Expanding the current text output to include voice conversion, which can be used for more effective branding and communication.
- Integrating a microphone feature that enables users to speak their inputs directly, which the AI assistant will then convert into processed text, enhancing user accessibility and convenience.
- In customer support automation, customer interactions can vary, with some being negative. In such cases, it's crucial that the assistant does not mirror the negative tone. Instead, it should transform any negative tone into a positive tone before responding. This approach ensures that the support remains constructive and uplifting, helping to defuse potentially tense situations and enhance overall customer satisfaction.

## Deployment

I deployed the app using Vercel.

Here is the link to the App:-

```bash
   https://tone-translator-frontend-g5pa.vercel.app/
```
