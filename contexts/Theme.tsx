import React, { FC, useContext, useState } from 'react';

interface IColors {
  primary: {
    '100': string;
    '80': string;
    '60': string;
  };
  secondary: string;
  gradient: {
    primary: string;
    secondary: string;
  };
  text: {
    '100': string;
    '80': string;
    '60': string;
  };
  background: {
    '100': string;
    '80': string;
    '60': string;
  };
  overlay: {
    '100': string;
    '80': string;
    '60': string;
  };
}

interface IShadows {
  small: string;
  medium: string;
  large: string;
}

export interface IThemeProvider {
  darkMode: boolean;
  toggleDarkMode: () => void;
  colors: IColors;
  shadows: IShadows;
}

//@ts-ignore
const ThemeContext = React.createContext<IThemeProvider>();

/* ----- HOOK ----- */
export function useTheme() {
  return useContext<IThemeProvider>(ThemeContext);
}

/* ----- PROVIDER ----- */
export const ThemeProvider: FC<any> = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const value: IThemeProvider = {
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
    colors: {
      primary: {
        '100': '#F04D61',
        '80': '#F37181',
        '60': '#F694A0',
      },
      secondary: '#A2A2A2',
      gradient: {
        primary: 'linear-gradient(90deg, #D64A4A 0%, #DD7070 100%)',
        secondary: 'linear-gradient(90deg, #F3A1AB 0%, #F04D61 100%)',
      },
      text: darkMode
        ? {
            '100': '#FFFFFF',
            '80': '#F2F4F5',
            '60': '#A2A2A2',
          }
        : {
            '100': '#252525',
            '80': '#515151',
            '60': '#7C7C7C',
          },
      background: darkMode
        ? {
            '100': '#252525',
            '80': '#383838',
            '60': '#4F4F4F',
          }
        : {
            '100': '#FFFFFF',
            '80': '#FFFFFF',
            '60': '#FFFFFF',
          },
      overlay: darkMode
        ? {
            '100': '#6c6c6c6e',
            '80': '#7171713c',
            '60': '#75757522',
          }
        : {
            '100': '#ffffff5e',
            '80': '#cacaca3b',
            '60': '#b2b2b222',
          },
    },
    shadows: {
      small: darkMode ? '0px 3px 8px rgba(0, 0, 0, 0.2)' : '0px 3px 8px rgba(0, 0, 0, 0.1)',
      medium: darkMode ? '0px 6px 16px rgba(0, 0, 0, 0.5)' : '0px 6px 16px rgba(0, 0, 0, 0.1)',
      large: darkMode ? '0px 6px 16px rgba(0, 0, 0, 0.2)' : '0px 6px 16px rgba(0, 0, 0, 0.2)',
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
