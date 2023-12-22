/**
 * Custom hook and context for managing theme preference, saving it in local storage
 */

import React, { useState, useEffect, createContext, useContext } from 'react';

type ThemeContextProps = {
  darkTheme: boolean;
};

// Context to provide the theme state
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Context to provide the function for updating the theme
const ThemeUpdateContext = createContext<() => void>(() => {});

/**
 * Hook to get the current theme state
 *
 * @throws {Error} Throws an error if used outside a ThemeProvider
 * @returns {ThemeContextProps} The current theme state
 */
export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

/**
 * Hook to get the function for updating the theme
 *
 * @throws {Error} Throws an error if used outside a ThemeProvider
 * @returns {() => void} The function for updating the theme
 */
export function useThemeUpdate(): () => void {
  const context = useContext(ThemeUpdateContext);

  if (!context) {
    throw new Error('useThemeUpdate must be used within a ThemeProvider');
  }

  return context;
}

/**
 * Component to wrap the app and manage the theme preferences
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
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
  }, []);

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
