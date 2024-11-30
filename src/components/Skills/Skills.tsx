/**
 * Skills Component
 * Displays a grid of cybersecurity skills and expertise
 */

import React from 'react';
import { Container, Typography, Box, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import LockIcon from '@mui/icons-material/Lock';
import { useTerminal } from '../../context/TerminalContext';
import { styled } from '@mui/material/styles';

// Interface for skill category data structure
interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
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
    fontSize: '1.1rem',
  },
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  position: 'relative',
  paddingLeft: theme.spacing(2),
  fontSize: '0.875rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
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
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'Risk Management'],
    icon: <SecurityIcon />,
  },
  {
    title: 'Development',
    skills: ['Python', 'JavaScript/TypeScript', 'C++', 'React', 'Java'],
    icon: <CodeIcon />,
  },
  {
    title: 'Network Security',
    skills: ['Firewall Configuration', 'IDS/IPS', 'Network Monitoring', 'Traffic Analysis'],
    icon: <NetworkCheckIcon />,
  },
  {
    title: 'System Security',
    skills: ['Access Control', 'System Hardening', 'Security Policies', 'Incident Response'],
    icon: <LockIcon />,
  },
  {
    title: 'Database Security',
    skills: ['SQL/NoSQL Security', 'Data Encryption', 'Access Management', 'Backup & Recovery'],
    icon: <StorageIcon />,
  },
  {
    title: 'Security Tools',
    skills: ['Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP'],
    icon: <BugReportIcon />,
  },
];

const Skills: React.FC = () => {
  const { contentHeight, isTerminalMinimized } = useTerminal();

  return (
    <Container>
      <Box
        sx={{
          minHeight: contentHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'auto',
          paddingY: { xs: 3, sm: 4 },
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
                fontSize: { xs: '2rem', sm: '2.5rem' },
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
                <StyledCard elevation={0}>
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
