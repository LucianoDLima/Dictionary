/**
 * Custom hook and context for managing theme preference, saving it in local storage
 */

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type ThemeContextProps = {
  darkTheme: boolean;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeUpdateContext = createContext<() => void>(() => {});

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  // Check if the user prefers dark mode based on their device/browser's settings.
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = localStorage.getItem('preferredTheme') || (prefersDarkMode ? 'dark' : 'light');

  const [darkTheme, setDarkTheme] = useState<boolean>(initialTheme === 'dark');

  useEffect(() => {
    // Set the initial theme based on user's device/browser's settings. DM ftw
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!localStorage.getItem('preferredTheme')) {
      setDarkTheme(prefersDarkMode);
    }
  }, [darkTheme]);

  // Save theme to local storage whenever it changes
  useEffect(() => {
    document.body.dataset.theme = darkTheme ? 'dark' : 'light';
    localStorage.setItem('preferredTheme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  // Toggle function to switch between dark and light themes.
  function toggleTheme(): void {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  // Context value to be passed to ThemeContext
  const contextValue: ThemeContextProps = {
    darkTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export function useThemeUpdate(): () => void {
  const context = useContext(ThemeUpdateContext);

  if (!context) {
    throw new Error('useThemeUpdate must be used within a ThemeProvider');
  }

  return context;
}
