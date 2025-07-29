/**
 * Skills Component
 * Displays a grid of cybersecurity skills and technologies
 */

import React, { useEffect } from 'react';
import { Container, Typography, Box, Paper, Stack, Grid, useTheme, useMediaQuery, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LockIcon from '@mui/icons-material/Lock';
import { useTerminal } from '../../context/TerminalContext';
import { styled } from '@mui/material/styles';

// Interface for skill category data structure
interface SkillCategory {
  title: string;
  technologies: string[];
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
    title: 'Programming Languages',
    technologies: ['Python', 'JavaScript/TypeScript', 'C/C++', 'Java', 'C#'],
    icon: <CodeIcon />,
    url: 'https://www.python.org/',
  },
  {
    title: 'Development',
    technologies: ['Software Development Lifecycle (SDLC)', 'Object-Oriented Programming', 'Agile Development', 'Git'],
    icon: <CodeIcon />,
    url: 'https://aws.amazon.com/what-is/sdlc/',
  },
  {
    title: 'Containerization',
    technologies: ['Docker/Podman', 'Docker-Compose', 'Multiservice Architecture'],
    icon: <StorageIcon />,
    url: 'https://www.docker.com/',
  },
  {
    title: 'DevOps',
    technologies: ['Jenkins', 'AWS CloudFormation', 'Prometheus', 'Grafana'],
    icon: <CodeIcon />,
    url: 'https://about.gitlab.com/topics/devops/',
  },
  {
    title: 'Machine Learning',
    technologies: ['Pytorch', 'Scikit-learn', 'Numpy', 'Pandas', 'Matplotlib'],
    icon: <SecurityIcon />,
    url: 'https://pytorch.org/',
  },
  {
    title: 'AI',
    technologies: ['AWS Bedrock', 'Ollama', 'Pydantic', 'LangChain', 'CrewAI', 'HuggingFace', 'ChromaDB'],
    icon: <CodeIcon />,
    url: 'https://aws.amazon.com/bedrock/',
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
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Skills & Technologies
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <Box
            sx={{
              width: '100%',
              padding: { xs: 1, sm: 0 },
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              {skillCategories.map((category, index) => (
                <Grid item xs={12} sm={6} md={4} key={category.title}>
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
                    <StyledCard 
                      elevation={0}
                      onClick={() => window.open(category.url, '_blank', 'noopener,noreferrer')}
                    >
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <SkillIcon>{category.icon}</SkillIcon>
                          <SkillTitle variant="h6">
                            {category.title}
                          </SkillTitle>
                        </Box>
                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                          {category.technologies.map((technology) => (
                            <SkillItem key={technology}>
                              {technology}
                            </SkillItem>
                          ))}
                        </Stack>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Skills;
