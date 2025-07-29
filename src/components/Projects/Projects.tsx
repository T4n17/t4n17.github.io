/**
 * Projects Component
 * Displays a grid of cybersecurity project cards
 * Features animations, responsive design, and interactive elements
 */

import React, { useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { useTerminal } from '../../context/TerminalContext';

// Interface for project data structure
interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  url: string;
}

// Project data array
const projects: Project[] = [
  {
    title: 'AI Zork',
    description: 'Let Your LLM Play Zork!',
    technologies: ['Python', 'LLM', 'Ollama', 'Pydantic'],
    icon: <SportsEsportsIcon sx={{ fontSize: 40, color: '#00f2ff', filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} />,
    url: 'https://github.com/T4n17/aizork'
  },
  {
    title: 'Discrete Logarithm Suite',
    description: 'Python Algorithm Suite for solving discrete logarithms',
    technologies: ['Python', 'Cryptography', 'Mathematics'],
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#00f2ff', filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} />,
    url: 'https://github.com/T4n17/dlog_suite'
  },
  {
    title: 'Angr Overflow Finder',
    description: 'A configurable Python script to automatically find overflows and potentially generate input to trigger them',
    technologies: ['Python', 'Reverse Engineering', 'Binary Analysis', 'Vulnerability Analysis', 'Symbolic Execution'],
    icon: <BugReportIcon sx={{ fontSize: 40, color: '#00f2ff', filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} />,
    url: 'https://github.com/T4n17/overflow_finder'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React, TypeScript, and Material-UI. Features a modern cyberpunk design with interactive elements.',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
    icon: <CodeIcon sx={{ fontSize: 40, color: '#00f2ff', filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} />,
    url: 'https://github.com/T4n17/t4n17.github.io'
  },
  {
    title: 'Simulink Phase Vocoder',
    description: 'Phase vocoder implemented in Simulink and Matlab',
    technologies: ['Matlab', 'Simulink', 'Signal Processing', 'Audio Processing', 'Frequency Analysis'],
    icon: <GraphicEqIcon sx={{ fontSize: 40, color: '#00f2ff', filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} />,
    url: 'https://github.com/T4n17/phasevocoder_simulink'
  }
];

const Projects: React.FC = () => {
  const { contentHeight } = useTerminal();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (isDesktop) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isDesktop]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ minHeight: contentHeight, py: 8 }}>
        <Typography variant="h2" sx={{
          fontFamily: '"Share Tech Mono", monospace',
          color: '#00f2ff',
          textAlign: 'center',
          mb: 6,
          textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}>
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1
                }}
                style={{ height: '100%' }}
              >
                <Card
                  onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(10, 25, 47, 0.5)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(0, 242, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                      border: '1px solid rgba(0, 242, 255, 0.5)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Project Header */}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                      {project.icon}
                      <Typography
                        variant="h6"
                        sx={{
                          ml: 2,
                          fontFamily: '"Share Tech Mono", monospace',
                          color: '#00f2ff',
                          fontSize: '1.25rem',
                        }}
                      >
                        {project.title}
                      </Typography>
                    </div>

                    {/* Project Description */}
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 2,
                        flexGrow: 1,
                        fontSize: '0.875rem',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 242, 255, 0.1)',
                            color: '#00f2ff',
                            border: '1px solid rgba(0, 242, 255, 0.3)',
                            fontFamily: '"Share Tech Mono", monospace',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
