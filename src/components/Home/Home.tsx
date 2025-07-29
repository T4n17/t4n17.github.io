import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTerminal } from '../../context/TerminalContext';

const Home: React.FC = () => {
  const { contentHeight } = useTerminal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const panels = [
    {
      title: "GENERATIVE AI",
      items: [
        "LLMs",
        "RAG & Knowledge Graphs",
        "Prompt Engineering"
      ]
    },
    {
      title: "AGENTIC SYSTEMS",
      items: [
        "Agentic Architectures",
        "Autonomous Agents",
        "Multi-Agent Collaborative Systems",
      ]
    },
    {
      title: "AIOPS",
      items: [
        "Intelligent Pipelines",
        "Automated Log Analysis and Reporting",
        "Automated Troubleshooting"
      ]
    }
  ];

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '0123456789ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const raindrops = Array(columns).fill(1);

    ctx.font = `${fontSize}px "Share Tech Mono"`;

    const matrix = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00f2ff';
      for (let i = 0; i < raindrops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = raindrops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          raindrops[i] = 0;
        }
        raindrops[i]++;
      }
    };

    const interval = setInterval(matrix, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [panels.length]);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: { xs: '1000px', md: contentHeight },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1800px',
            height: { xs: '100%', md: '700px' },
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
            border: '1px solid rgba(0, 242, 255, 0.3)',
            background: 'rgba(10, 25, 47, 0.3)',
            backdropFilter: 'blur(4px)',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.5,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'space-between' },
                alignItems: 'center',
                gap: { xs: 4, md: 12 },
                py: { xs: 3, sm: 3 },
                px: { xs: 2, md: 12 },
                background: 'transparent',
                flexDirection: { xs: 'column', md: 'row' },
                mt: { xs: 4, md: 2 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    marginLeft: { xs: 0, md: '20%' },
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '180px', sm: '200px', md: '250px' },
                      height: { xs: '180px', sm: '200px', md: '250px' },
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid rgba(0, 242, 255, 0.5)',
                      boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src="/profilepic.jpeg"
                      alt="Profile"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>

              <Box
                sx={{
                  marginRight: { xs: 0, md: '15%' },
                  width: { xs: '100%', md: 'auto' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ maxWidth: '100%' }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      color: '#fff',
                      textAlign: { xs: 'center', md: 'left' },
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    Hi, I'm Andrea Gaetani
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      color: '#00f2ff',
                      textAlign: { xs: 'center', md: 'left' },
                      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                      mt: 2,
                      textShadow: '0 0 10px rgba(0, 242, 255, 0.3)',
                    }}
                  >
                    Information Engineer
                  </Typography>
                </motion.div>
              </Box>
            </Box>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mb: { xs: 2, md: 3 },
                height: { xs: 'auto', md: '40%' },
                mt: { xs: 0, md: -2 },
              }}
            >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                    </motion.div>
                  </Box>
              </Box>

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                alignItems: { xs: 'center', md: 'flex-start' },
                py: { xs: 2, md: 1 },
                background: 'transparent',
                mt: { xs: 1, md: -1 },
                gap: { xs: 2, md: 3 },
                height: { xs: 'auto', md: '30%' },
              }}
            >
              {panels.map((panel, panelIndex) => (
                <Box
                  key={panel.title}
                  sx={{
                    width: { xs: '100%', md: '30%' },
                    padding: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: panelIndex * 0.2 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Share Tech Mono", monospace',
                        color: '#00f2ff',
                        mb: 2,
                        textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                        fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                      }}
                    >
                      {panel.title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {panel.items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + panelIndex * 0.1 }}
                        >
                          <Typography
                            sx={{
                              fontFamily: '"Share Tech Mono", monospace',
                              color: '#fff',
                              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 2,
                            }}
                          >
                            {item}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
