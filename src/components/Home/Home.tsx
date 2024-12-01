import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTerminal } from '../../context/TerminalContext';

const Home: React.FC = () => {
  const { contentHeight } = useTerminal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      title: "FIELD OF INTEREST",
      items: [
        "Penetration Testing",
        "Reverse Engineering",
        "Secure Development"
      ]
    },
    {
      title: "TECHNICAL SKILLS",
      items: [
        "Scripting and Development",
        "Containerization",
        "Network Securing",
      ]
    },
    {
      title: "CURRENTLY LEARNING",
      items: [
        "Blue Team Operations",
        "SOC Analysis",
        "Incident Response",
      ]
    }
  ];

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
    const panelInterval = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % panels.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(panelInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <Container>
      <Box
        sx={{
          height: contentHeight,
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
            maxWidth: '1600px',
            height: '600px',
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
            }}
          >
            {/* Fixed Title Section */}
            <Box
              sx={{
                width: '100%',
                padding: '2rem',
                background: 'transparent',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Share Tech Mono", monospace',
                    color: '#00f2ff',
                    textAlign: 'center',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                    textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                  }}
                >
                  Tani's Portfolio
                </Typography>
              </motion.div>
            </Box>

            {/* Animated Panels Section */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                background: 'transparent',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      color: '#00f2ff',
                      mb: 4,
                      textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    }}
                  >
                    {panels[activePanel].title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {panels[activePanel].items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Share Tech Mono", monospace',
                            color: '#fff',
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            '&::before': {
                              content: '""',
                              width: '8px',
                              height: '8px',
                              backgroundColor: '#00f2ff',
                              borderRadius: '50%',
                              animation: 'pulse 1.5s infinite',
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
