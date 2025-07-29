/**
 * Terminal Component
 * Interactive terminal interface with xterm.js integration
 * Supports minimization, command history, and custom styling
 */

import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';
import { useTerminal } from '../../context/TerminalContext';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Terminal: React.FC = () => {
  // Refs for DOM element and terminal instance
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  
  // Get terminal state from context
  const { isTerminalMinimized, toggleTerminal } = useTerminal();

  // Handle terminal commands
  const handleCommand = (command: string) => {
    const term = xtermRef.current;
    if (!term) return;

    const cmd = command.trim().toLowerCase();

    switch (cmd) {
      case 'help':
        term.writeln('\x1b[36mAvailable commands:\x1b[0m');
        term.writeln('  \x1b[36mhelp\x1b[0m     - Show this help message');
        term.writeln('  \x1b[36mclear\x1b[0m    - Clear the terminal');
        term.writeln('  \x1b[36mskills\x1b[0m   - List my skills');
        term.writeln('  \x1b[36mprojects\x1b[0m - View my projects');
        term.writeln('  \x1b[36mcontact\x1b[0m  - Contact information');
        break;
      case 'clear':
        term.clear();
        break;
      case 'skills':
        term.writeln('\x1b[36m┌─ Skills ──────────────────────────┐\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m • Development');
        term.writeln('\x1b[36m│\x1b[0m • Containerization');
        term.writeln('\x1b[36m│\x1b[0m • DevOps');
        term.writeln('\x1b[36m│\x1b[0m • Machine Learning');
        term.writeln('\x1b[36m│\x1b[0m • AI');
        term.writeln('\x1b[36m└────────────────────────────────────┘\x1b[0m');
        break;
      case 'projects':
        term.writeln('\x1b[36m┌─ Projects ────────────────────────┐\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m AI Zork');
        term.writeln('\x1b[36m│\x1b[0m • Let Your LLM Play Zork!');
        term.writeln('\x1b[36m│\x1b[0m • Technologies: Python, LLM, Ollama, Pydantic');
        term.writeln('\x1b[36m│\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m Discrete Logarithm Suite');
        term.writeln('\x1b[36m│\x1b[0m • Python Algorithm Suite for solving discrete logarithms');
        term.writeln('\x1b[36m│\x1b[0m • Technologies: Python, Cryptography, Mathematics');
        term.writeln('\x1b[36m│\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m Angr Overflow Finder');
        term.writeln('\x1b[36m│\x1b[0m • Tool for detecting buffer overflow vulnerabilities');
        term.writeln('\x1b[36m│\x1b[0m • Technologies: Python, Assembly, Binary Analysis');
        term.writeln('\x1b[36m│\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m Portfolio Website');
        term.writeln('\x1b[36m│\x1b[0m • Personal portfolio with modern cyberpunk design');
        term.writeln('\x1b[36m│\x1b[0m • Technologies: React, TypeScript, Material-UI');
        term.writeln('\x1b[36m└────────────────────────────────────┘\x1b[0m');
        break;
      case 'contact':
        term.writeln('\x1b[36m┌─ Contact Information ───────────────┐\x1b[0m');
        term.writeln('\x1b[36m│\x1b[0m Email: gaetani.andrea@proton.me');
        term.writeln('\x1b[36m│\x1b[0m LinkedIn: linkedin.com/in/andrea-gaetani-8a3b9b1b4');
        term.writeln('\x1b[36m│\x1b[0m GitHub: github.com/t4n17');
        term.writeln('\x1b[36m└────────────────────────────────────┘\x1b[0m');
        break;
      case '':
        break;
      default:
        term.writeln(`\x1b[31mCommand not found: ${command}\x1b[0m`);
        term.writeln('Type "\x1b[36mhelp\x1b[0m" for available commands');
    }
  };

  // Initialize terminal
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let resizeTimeout: NodeJS.Timeout;

    const initializeTerminal = () => {
      if (!terminalRef.current) return;

      // Create new terminal instance with custom styling
      const term = new XTerm({
        theme: {
          background: 'transparent',
          foreground: '#00f2ff',
          cursor: '#00f2ff',
          cursorAccent: '#0a192f',
          selectionBackground: 'rgba(0, 242, 255, 0.3)',
          selectionForeground: '#ffffff',
          black: '#0a192f',
          red: '#ff5555',
          green: '#50fa7b',
          yellow: '#f1fa8c',
          blue: '#00f2ff',
          magenta: '#ff79c6',
          cyan: '#8be9fd',
          white: '#f8f8f2',
          brightBlack: '#6272a4',
          brightRed: '#ff6e6e',
          brightGreen: '#69ff94',
          brightYellow: '#ffffa5',
          brightBlue: '#d6acff',
          brightMagenta: '#ff92df',
          brightCyan: '#a4ffff',
          brightWhite: '#ffffff',
        },
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: 14,
        lineHeight: 1.2,
        cursorBlink: true,
        cursorStyle: 'block',
        allowTransparency: true,
        rows: 10,
        cols: 80,
        scrollback: 1000,
        convertEol: true,
        disableStdin: false,
      });

      // Initialize FitAddon
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      fitAddonRef.current = fitAddon;

      // Initialize WebLinksAddon
      const webLinksAddon = new WebLinksAddon();
      term.loadAddon(webLinksAddon);

      // Store terminal instance
      xtermRef.current = term;

      // Open terminal in the container
      term.open(terminalRef.current);

      // Create hidden textarea for mobile input
      const textArea = document.createElement('textarea');
      textArea.style.position = 'absolute';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.width = '1px';
      textArea.style.height = '1px';
      textArea.style.opacity = '0';
      textArea.style.zIndex = '-1';
      if (terminalRef.current) {
        terminalRef.current.appendChild(textArea);
        inputRef.current = textArea;

        // Handle terminal container clicks to focus textarea
        terminalRef.current.addEventListener('click', () => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        });
      }

      // Handle mobile input
      textArea.addEventListener('input', (e) => {
        const input = (e.target as HTMLTextAreaElement).value;
        if (input) {
          input.split('').forEach(char => {
            currentLine += char;
            term.write(char);
          });
          textArea.value = '';
        }
      });

      textArea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          term.write('\r\n');
          handleCommand(currentLine.trim());
          currentLine = '';
          term.write('\x1b[36m$\x1b[0m ');
          e.preventDefault();
        } else if (e.key === 'Backspace') {
          if (currentLine.length > 0) {
            currentLine = currentLine.slice(0, -1);
            term.write('\b \b');
          }
          e.preventDefault();
        }
      });

      // Welcome message with initial newlines
      term.write('\n\n');
      term.writeln('\x1b[36m╔════════════════════════════════════════╗');
      term.writeln('║  Welcome to tani\'s CLI                 ║');
      term.writeln('║  Type "help" for available commands    ║');
      term.writeln('╚════════════════════════════════════════╝\x1b[0m');
      term.write('\r\n\x1b[36m$\x1b[0m ');

      // Handle user input
      let currentLine = '';
      term.onKey(({ key, domEvent }) => {
        const char = key;
        
        if (domEvent.keyCode === 13) { // Enter key
          term.write('\r\n');
          handleCommand(currentLine.trim());
          currentLine = '';
          term.write('\x1b[36m$\x1b[0m ');
        } else if (domEvent.keyCode === 8) { // Backspace
          if (currentLine.length > 0) {
            currentLine = currentLine.slice(0, -1);
            term.write('\b \b');
          }
        } else {
          currentLine += char;
          term.write(char);
        }
      });

      // Debounced resize handler
      const handleResize = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(() => {
          if (fitAddonRef.current && !isTerminalMinimized && terminalRef.current) {
            try {
              fitAddonRef.current.fit();
              term.scrollToBottom();
            } catch (error) {
              console.debug('Resize operation skipped:', error);
            }
          }
        }, 100);
      };

      // Handle terminal visibility changes with error boundary
      const resizeObserver = new ResizeObserver((entries) => {
        // Check if the element is actually visible
        if (entries[0].contentRect.width > 0 && entries[0].contentRect.height > 0) {
          handleResize();
        }
      });
      
      if (terminalRef.current) {
        try {
          resizeObserver.observe(terminalRef.current);
        } catch (error) {
          console.debug('ResizeObserver error:', error);
        }
      }

      // Initial fit with delay
      setTimeout(() => {
        handleResize();
        setIsReady(true);
      }, 100);

      // Add resize listener
      window.addEventListener('resize', handleResize);

      cleanup = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        window.removeEventListener('resize', handleResize);
        try {
          resizeObserver.disconnect();
        } catch (error) {
          console.debug('ResizeObserver cleanup error:', error);
        }
        term.dispose();
      };
    };

    // Initialize with a delay to ensure container is ready
    const initTimer = setTimeout(initializeTerminal, 0);

    return () => {
      clearTimeout(initTimer);
      if (cleanup) cleanup();
    };
  }, [isTerminalMinimized]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: isTerminalMinimized ? '40px' : '250px',
        background: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(0, 242, 255, 0.2)',
        transition: 'height 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '4px 8px',
          borderBottom: '1px solid rgba(0, 242, 255, 0.2)',
          gap: '8px',
        }}
      >
        <Box
          sx={{
            color: '#00f2ff',
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: '0.9rem',
            opacity: 0.8,
            letterSpacing: '0.05em',
          }}
        >
          TERMINAL
        </Box>
        <IconButton
          size="small"
          onClick={toggleTerminal}
          sx={{
            color: '#00f2ff',
            '&:hover': {
              backgroundColor: 'rgba(0, 242, 255, 0.1)',
            },
          }}
        >
          {isTerminalMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
        </IconButton>
      </Box>
      <Box
        ref={terminalRef}
        sx={{
          flex: 1,
          padding: '8px',
          opacity: isTerminalMinimized || !isReady ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          visibility: isTerminalMinimized ? 'hidden' : 'visible',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          '& .xterm': {
            height: 'calc(100% - 16px)',
            flex: 1,
            position: 'absolute',
            top: '8px',
            left: '8px',
            right: '8px',
            bottom: '24px',
          },
          '& .xterm-viewport': {
            background: 'transparent !important',
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
          '& .xterm-screen': {
            background: 'transparent !important',
          },
        }}
      />
    </Box>
  );
};

export default Terminal;
