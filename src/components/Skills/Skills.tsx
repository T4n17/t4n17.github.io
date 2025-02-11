/**
 * Skills Component
 * Displays a grid of cybersecurity skills and expertise
 */

import React, { useEffect } from 'react';
import { Container, Typography, Box, Paper, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import LockIcon from '@mui/icons-material/Lock';
import { useTerminal } from '../../context/TerminalContext';
import { styled } from '@mui/material/styles';

// Interface for skill category data structure
interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  url: string;
}

const StyledCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(10, 25, 47, 0.5)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(0, 242, 255, 0.2)',
  transition: 'all 0.3s ease',
  padding: theme.spacing(3),
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
    border: '1px solid rgba(0, 242, 255, 0.5)',
  },
}));

const SkillIcon = styled(Box)({
  '& .MuiSvgIcon-root': {
    fontSize: 40,
    color: '#00f2ff',
    filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))',
  },
});

const SkillTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Share Tech Mono", monospace',
  color: '#00f2ff',
  marginLeft: theme.spacing(2),
  fontSize: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  position: 'relative',
  paddingLeft: theme.spacing(2),
  fontSize: '1rem',
  lineHeight: '1.5',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 8,
    height: 8,
    [theme.breakpoints.down('sm')]: {
      width: 6,
      height: 6,
    },
    backgroundColor: '#00f2ff',
    borderRadius: '50%',
    boxShadow: '0 0 5px rgba(0, 242, 255, 0.5)',
  },
}));

// Skills categories data array
const skillCategories: SkillCategory[] = [
  {
    title: 'Security',
    skills: ['Network Security', 'Vulnerability Assessment', 'Security Auditing', 'Software Exploitation'],
    icon: <SecurityIcon />,
    url: 'https://www.offensive-security.com/pwk-oscp/',
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript/TypeScript', 'C/C++', 'Java', 'C#'],
    icon: <CodeIcon />,
    url: 'https://github.com/T4n17',
  },
  {
    title: 'Development',
    skills: ['Software Development Lifecycle (SDLC)', 'Object-Oriented Programming', 'Agile Development', 'GitHub'],
    icon: <CodeIcon />,
    url: 'https://aws.amazon.com/what-is/sdlc/',
  },
  {
    title: 'Containerization',
    skills: ['Docker/Podman', 'Docker-Compose', 'Docker-Swarm', 'Multiservice Architecture'],
    icon: <StorageIcon />,
    url: 'https://www.docker.com/',
  },
  {
    title: 'System Monitoring',
    skills: ['Grafana', 'Prometheus', 'Logging', 'Performance Monitoring'],
    icon: <LockIcon />,
    url: 'https://www.grafana.com/',
  },
  {
    title: 'Database Management',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: <StorageIcon />,
    url: 'https://www.mongodb.com/security-best-practices',
  },
  {
    title: 'AI/ML Applications',
    skills: ['PyTorch', 'Scikit-Learn'],
    icon: <BugReportIcon />,
    url: 'https://pytorch.org/',
  },
];

const Skills: React.FC = () => {
  const { contentHeight, isTerminalMinimized } = useTerminal();
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
    <Container>
      <Box
        sx={{
          height: { xs: 'auto', md: contentHeight },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 4, md: 0 },
        }}
      >
        <motion.div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
          {/* Page Title with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontFamily: '"Share Tech Mono", monospace',
                color: '#00f2ff',
                textAlign: 'center',
                fontSize: { xs: '2.25rem', sm: '2.5rem' },
              }}
            >
              Skills & Expertise
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              width: '100%',
              padding: { xs: 1, sm: 0 },
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
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
                <StyledCard 
                  elevation={0}
                  onClick={() => window.open(category.url, '_blank', 'noopener,noreferrer')}
                >
                  <Stack spacing={3} sx={{ height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SkillIcon>{category.icon}</SkillIcon>
                      <SkillTitle variant="h6">
                        {category.title}
                      </SkillTitle>
                    </Box>
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                      {category.skills.map((skill) => (
                        <SkillItem key={skill}>
                          {skill}
                        </SkillItem>
                      ))}
                    </Stack>
                    <Typography 
                      sx={{ 
                        color: '#00f2ff',
                        fontSize: '0.875rem',
                        fontFamily: '"Share Tech Mono", monospace',
                        textAlign: 'right',
                        mt: 'auto'
                      }}
                    >
                    </Typography>
                  </Stack>
                </StyledCard>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Skills;
