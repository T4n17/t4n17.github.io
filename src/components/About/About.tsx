import React from 'react';
import { Box, Typography, Container, Paper, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from '@mui/material/styles';
import { useTerminal } from '../../context/TerminalContext';
import HackTheBoxIcon from '../icons/HackTheBoxIcon';

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(10, 25, 47, 0.5)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(0, 242, 255, 0.2)',
  borderRadius: '15px',
  color: '#fff',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  '&:hover': {
    boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
    border: '1px solid rgba(0, 242, 255, 0.5)',
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  '& .label': {
    color: '#00f2ff',
    fontFamily: '"Share Tech Mono", monospace',
    marginBottom: theme.spacing(0.5),
    fontSize: '1.3rem',
    fontWeight: 500,
  },
  '& .value': {
    color: '#fff',
    fontFamily: '"Share Tech Mono", monospace',
    fontSize: '1.1rem',
  },
}));

const EducationItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  '& .MuiSvgIcon-root': {
    color: '#00f2ff',
    marginRight: '4px',
    marginTop: '2px',
    fontSize: '1.2rem',
  },
  '& .time-period': {
    color: 'rgba(0, 242, 255, 0.7)',
    fontSize: '0.8rem',
    marginLeft: '8px',
  },
});

const SocialIcon = styled(motion.div)({
  display: 'inline-flex',
  marginRight: '16px',
  cursor: 'pointer',
  '&:last-child': {
    marginRight: 0,
  },
  '& svg': {
    fontSize: '1.8rem',
    color: '#00f2ff',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1.1)',
    },
  },
});

const About: React.FC = () => {
  const { contentHeight, isTerminalMinimized } = useTerminal();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Container>
      <Box
        sx={{
          minHeight: contentHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden',
          paddingY: { xs: 3, sm: 4 },
          paddingBottom: isTerminalMinimized ? { xs: 3, sm: 4 } : { xs: 8, sm: 10 },
          width: '100%',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          initial={false}
          animate={{
            y: isTerminalMinimized ? 0 : 40,
            opacity: isTerminalMinimized ? 1 : 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ width: '100%', maxWidth: '800px' }}
          >
            <StyledCard elevation={3}>
              <Stack spacing={2} alignItems="center">
                {/* Personal Information Section */}
                <Box width="100%" maxWidth="sm">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <InfoItem>
                        <Typography className="label">Name</Typography>
                        <Typography className="value">Andrea Gaetani</Typography>
                      </InfoItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InfoItem>
                        <Typography className="label">University</Typography>
                        <Typography className="value">University of L'Aquila</Typography>
                      </InfoItem>
                    </Grid>
                    <Grid item xs={12}>
                      <InfoItem sx={{ mb: 0 }}>
                        <Typography className="label" sx={{ mb: 1 }}>Education</Typography>
                        <Stack spacing={0.5}>
                          <EducationItem>
                            <ArrowRightIcon />
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'space-between',
                              width: '100%'
                            }}>
                              <Typography className="value" sx={{ 
                                fontSize: '1rem',
                                textAlign: 'left',
                                flex: 1
                              }}>
                                Master's in Computing System Engineering
                              </Typography>
                              <Typography className="time-period" sx={{ 
                                ml: 2,
                                minWidth: '120px',
                                textAlign: 'left',
                                flexShrink: 0
                              }}>
                                (2023 - Present)
                              </Typography>
                            </Box>
                          </EducationItem>
                          <EducationItem>
                            <ArrowRightIcon />
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'space-between',
                              width: '100%'
                            }}>
                              <Typography className="value" sx={{ 
                                fontSize: '1rem',
                                textAlign: 'left',
                                flex: 1
                              }}>
                                Bachelor's in Information Engineering
                              </Typography>
                              <Typography className="time-period" sx={{ 
                                ml: 2,
                                minWidth: '120px',
                                textAlign: 'left',
                                flexShrink: 0
                              }}>
                                (2019 - 2023)
                              </Typography>
                            </Box>
                          </EducationItem>
                        </Stack>
                      </InfoItem>
                    </Grid>
                  </Grid>
                </Box>

                <Typography 
                  className="label" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 2,
                    mt: 1,
                    color: '#00f2ff',
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: '1.3rem',
                    fontWeight: 500
                  }}
                >
                  About Me
                </Typography>

                {/* About Text Section */}
                <Box width="100%">
                  <Stack spacing={2}>
                    <Typography sx={{ 
                      color: '#fff',
                      fontFamily: '"Share Tech Mono", monospace',
                      lineHeight: 1.6,
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      marginBottom: 2
                    }}>
                      I am a cybersecurity enthusiast with a deep passion for ethical hacking, 
                      penetration testing, and security research. My journey in cybersecurity 
                      has led me to explore various aspects of digital security, from reverse 
                      engineering to vulnerability analysis.
                    </Typography>
                    <Typography sx={{ 
                      color: '#fff',
                      fontFamily: '"Share Tech Mono", monospace',
                      lineHeight: 1.6,
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      marginBottom: 2
                    }}>
                      My projects reflect my commitment to understanding and improving digital security, 
                      whether it's through discrete logarithm algorithms, Active Directory setups, 
                      or automated vulnerability detection tools.
                    </Typography>
                  </Stack>
                </Box>

                {/* Social Links Section */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
                  <SocialIcon whileHover={{ scale: 1.1 }}>
                    <a href="https://github.com/t4n17" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </SocialIcon>
                  <SocialIcon whileHover={{ scale: 1.1 }}>
                    <a href="https://linkedin.com/in/andrea-gaetani-148a832b9" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </a>
                  </SocialIcon>
                  <SocialIcon whileHover={{ scale: 1.1 }}>
                    <a href="mailto:andreagaetani23@gmail.com">
                      <EmailIcon />
                    </a>
                  </SocialIcon>
                  <SocialIcon whileHover={{ scale: 1.1 }}>
                    <a href="https://app.hackthebox.com/profile/1340434">
                      <HackTheBoxIcon />
                    </a>
                  </SocialIcon>
                </Box>
              </Stack>
            </StyledCard>
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
