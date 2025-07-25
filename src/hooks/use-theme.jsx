import * as React from 'react';
import { ThemeContext } from '@/contexts/theme-context';

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}