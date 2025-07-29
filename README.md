# Personal Portfolio Website

A dynamic, AI-focused portfolio website showcasing my expertise and projects. Built with React, TypeScript, and Material-UI, featuring an interactive Matrix-style interface and a functional terminal emulator.

## Features

- **Interactive Dashboard**: Dynamic home page with Matrix-style digital rain effect
- **Rotating Information Panels**: Display of specializations, technical skills, and current learning focus
- **Terminal Emulator**: Fully functional terminal interface with custom commands
- **Cyberpunk Aesthetics**: Custom styling with neon effects and futuristic design
- **Responsive Design**: Fluid layout adapting to all screen sizes
- **Smooth Animations**: Engaging transitions using Framer Motion
- **Project Showcase**: Highlighting AI and machine learning projects

## Key Components

- **Home**: Interactive dashboard with Matrix rain effect and rotating information panels
- **Terminal**: Custom terminal emulator with command history and minimization
- **About**: Personal information and educational background
- **Skills**: Technical expertise and areas of focus
- **Projects**: Showcase of AI and machine learning work

## Technologies Used

- React 18 with TypeScript
- Material-UI for component styling
- Framer Motion for animations
- xterm.js for terminal emulation
- Custom Canvas implementations
- GitHub Pages for deployment

## Project Structure

```
src/
├── components/
│   ├── Home/         # Matrix effect and dashboard
│   ├── Terminal/     # Terminal emulator
│   ├── About/        # Personal information
│   ├── Skills/       # Technical skills
│   └── Projects/     # Project showcase
├── context/          # Terminal state management
├── styles/           # Global styling
└── assets/          # Static resources
```

## Getting Started

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

Visit [http://localhost:3000](http://localhost:3000) to view the site in development mode.

## Available Scripts

- `npm start`: Runs the development server
- `npm test`: Launches the test runner
- `npm run build`: Creates production build
- `npm run deploy`: Deploys to GitHub Pages

## Deployment

The site is deployed using GitHub Pages:

1. Ensure `homepage` in `package.json` points to your GitHub Pages URL
2. Run `npm run deploy` to build and deploy
