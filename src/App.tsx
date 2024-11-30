import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Terminal from './components/Terminal/Terminal';
import Layout from './components/Layout/Layout';
import { TerminalProvider } from './context/TerminalContext';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff',
    },
    background: {
      default: '#0a192f',
      paper: '#0d1b2a',
    },
  },
  typography: {
    fontFamily: '"Share Tech Mono", monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(to bottom, #0a192f 0%, #0d1b2a 100%)',
          minHeight: '100vh',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0, 242, 255, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 242, 255, 0.3)',
            borderRadius: '4px',
            '&:hover': {
              background: 'rgba(0, 242, 255, 0.5)',
            },
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TerminalProvider>
        <Router>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Navbar />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Layout>
            <Terminal />
          </Box>
        </Router>
      </TerminalProvider>
    </ThemeProvider>
  );
};

export default App;
