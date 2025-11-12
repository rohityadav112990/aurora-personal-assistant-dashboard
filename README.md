# Aurora Personal Assistant Dashboard

This is a complete, frontend-only React.js project for an Aurora Personal Assistant Dashboard. It's built with React, Tailwind CSS, Framer Motion, Chart.js, and uses LocalStorage for data persistence. The app is fully responsive, visually engaging with glassmorphism design, and includes smooth animations. It can be deployed on GitHub Pages.

## Features
- **Aurora Chat Panel**: Interactive chat with simulated Aurora responses, typing animation, and chat history stored in localStorage.
- **Task & Reminder Manager**: Add, edit, delete tasks with categories and status. Summary of completed vs. pending tasks.
- **Notes & Daily Goals Panel**: Quick notes with pinning, and a daily goal displayed in the header.
- **Dashboard Widgets**: Weather (via OpenWeatherMap API), live digital clock with greetings, and motivational quotes (via zenquotes.io API).
- **Productivity Analytics**: Bar chart for daily tasks and pie chart for category-wise productivity using Chart.js.
- **Navigation**: Sidebar and navbar with dark/light mode toggle. Smooth page transitions.
- **Optional Add-ons**: Voice input via Web Speech API, AI typing effect, and theme customization (accent color picker).
- Fully responsive for desktop, tablet, and mobile.
- Data persists in localStorage.

## Tech Stack
- React.js (functional components + hooks)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Chart.js (charts)
- LocalStorage (data persistence)
- Free APIs: OpenWeatherMap (weather), zenquotes.io (quotes)
- react-icons (icons)

## How to Run Locally
1. Clone or download the project.
2. Navigate to the project folder: `cd aurora-personal-assistant-dashboard`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Build the project: `npm run build`
4. Deploy: `npm run deploy`
5. Enable GitHub Pages in your repo settings, pointing to the `gh-pages` branch.

## Developer
Rohit Yadav
