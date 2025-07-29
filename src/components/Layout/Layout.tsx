import React from 'react';
import { Box } from '@mui/material';
import { useTerminal } from '../../context/TerminalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTerminalMinimized } = useTerminal();

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        marginTop: '64px', // Height of the AppBar
        marginBottom: isTerminalMinimized ? '40px' : '300px',
        transition: 'margin-bottom 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
