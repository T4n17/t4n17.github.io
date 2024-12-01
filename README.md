# Personal Portfolio Website

A modern, cyberpunk-themed portfolio website showcasing my projects and skills. Built with React, TypeScript, and Material-UI, featuring smooth animations and a unique terminal-inspired interface.

## Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Material-UI
- **Cyberpunk Design**: Custom-styled components with neon effects and modern aesthetics
- **Interactive Terminal**: Unique terminal-like interface for navigation
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Engaging animations using Framer Motion
- **Project Showcase**: Interactive project cards with live links
- **Dark Mode**: Cyberpunk-inspired dark theme for optimal viewing

## Technologies Used

- React 18
- TypeScript
- Material-UI
- Framer Motion
- React Router
- GitHub Pages

## Project Structure

The project follows a component-based architecture with the following structure:

```
src/
├── components/         # React components
│   ├── Terminal/      # Terminal component
│   ├── Projects/      # Projects showcase
│   └── ...           # Other components
├── context/           # React context providers
├── styles/            # Global styles and themes
└── assets/           # Static assets
```

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/T4n17/t4n17.github.io.git
cd t4n17.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run deploy`: Deploys the app to GitHub Pages

## Deployment

The site is deployed using GitHub Pages. To deploy your own version:

1. Update the `homepage` in `package.json` with your GitHub Pages URL
2. Run `npm run deploy`
