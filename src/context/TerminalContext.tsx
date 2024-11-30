/**
 * Terminal Context Module
 * Provides global state management for the terminal component.
 * Handles terminal minimization state and content height calculations.
 */

import React, { createContext, useContext, useState, useMemo } from 'react';

// Interface defining the shape of our terminal context
interface TerminalContextType {
  isTerminalMinimized: boolean;
  toggleTerminal: () => void;
  contentHeight: string;
}

// Create context with undefined as initial value
const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

/**
 * Terminal Provider Component
 * Wraps the application and provides terminal state management
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for terminal minimization
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(true);

  // Toggle function for minimizing/maximizing terminal
  const toggleTerminal = () => {
    setIsTerminalMinimized(prev => !prev);
  };

  // Calculate content height based on terminal state
  const contentHeight = useMemo(() => {
    // Add extra padding for mobile devices
    return isTerminalMinimized 
      ? 'calc(100vh - 80px)' // Extra space for mobile navigation
      : 'calc(100vh - 340px)'; // Extra space for terminal on mobile
  }, [isTerminalMinimized]);

  // Context value with memoized state and functions
  const value = useMemo(() => ({
    isTerminalMinimized,
    toggleTerminal,
    contentHeight,
  }), [isTerminalMinimized, contentHeight]);

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};

/**
 * Custom hook for accessing terminal context
 * @throws {Error} If used outside of TerminalProvider
 * @returns {TerminalContextType} Terminal context value
 */
export const useTerminal = (): TerminalContextType => {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};
