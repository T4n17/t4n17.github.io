import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import { useTerminal } from '../../context/TerminalContext';

const Home: React.FC = () => {
  const { contentHeight } = useTerminal();

  return (
    <Container>
      <Box
        sx={{
          height: contentHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Share Tech Mono", monospace',
              color: '#00f2ff',
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
              mb: 2,
            }}
          >
            Tani's Portfolio
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Share Tech Mono", monospace',
              color: 'rgba(0, 242, 255, 0.8)',
              textAlign: 'center',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              maxWidth: '800px',
              mb: 4,
            }}
          >
            Ethical Hacking | Security Research | Penetration Testing
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 4 },
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { Icon: SecurityIcon, label: 'Security Analysis' },
            { Icon: CodeIcon, label: 'Secure Development' },
            { Icon: BugReportIcon, label: 'Vulnerability Testing' },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  padding: 2,
                  borderRadius: '8px',
                  background: 'rgba(10, 25, 47, 0.5)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0, 242, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                    border: '1px solid rgba(0, 242, 255, 0.5)',
                  },
                }}
              >
                <Icon
                  sx={{
                    fontSize: { xs: '2rem', sm: '3rem' },
                    color: '#00f2ff',
                    filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))',
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Share Tech Mono", monospace',
                    color: '#00f2ff',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    textAlign: 'center',
                  }}
                >
                  {label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
