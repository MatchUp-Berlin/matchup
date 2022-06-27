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
    '60': string;
    '80': string;
  };
  background: {
    '100': string;
    '60': string;
    '80': string;
  };
}

interface IFont {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  textAlign: string;
}

interface IFonts {
  heading1: IFont;
  heading2: IFont;
  heading3: IFont;
  highlight1: IFont;
  hightlight2: IFont;
  paragraphDefault: IFont;
  paragraphBold: IFont;
  paragraphSmall: IFont;
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
  fonts: IFonts;
}

const ThemeContext = React.createContext<IThemeProvider | null>(null);

/* ----- HOOK ----- */
export function useTheme() {
  return useContext<IThemeProvider | null>(ThemeContext);
}

/* ----- PROVIDER ----- */
export const ThemeProvider: FC<any> = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

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
            '60': '#F2F4F5',
            '80': '#A2A2A2',
          }
        : {
            '100': '#252525',
            '60': '#515151',
            '80': '#7C7C7C',
          },
      background: darkMode
        ? {
            '100': '#252525',
            '60': '#32333D',
            '80': '#4F4F4F',
          }
        : {
            '100': '#FFFFFF',
            '60': '#FFFFFF',
            '80': '#FFFFFF',
          },
    },
    shadows: {
      small: darkMode ? '0px 3px 8px rgba(0, 0, 0, 0.5)' : '0px 3px 8px rgba(0, 0, 0, 0.1)',
      medium: darkMode ? '0px 6px 16px rgba(0, 0, 0, 0.5)' : '0px 6px 16px rgba(0, 0, 0, 0.1)',
      large: darkMode ? '0px 6px 16px rgba(0, 0, 0, 0.5)' : '0px 6px 16px rgba(0, 0, 0, 0.2)',
    },
    fonts: {
      heading1: {
        fontFamily: 'Inter',
        fontSize: '40px',
        fontWeight: '700',
        lineHeight: '40px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      heading2: {
        fontFamily: 'Inter',
        fontSize: '35px',
        fontWeight: '700',
        lineHeight: '42px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      heading3: {
        fontFamily: 'Inter',
        fontSize: '30px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      highlight1: {
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      hightlight2: {
        fontFamily: 'Inter',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      paragraphDefault: {
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      paragraphBold: {
        fontFamily: 'Inter',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
      paragraphSmall: {
        fontFamily: 'Inter',
        fontSize: '13px',
        fontWeight: '300',
        lineHeight: '16px',
        letterSpacing: '0em',
        textAlign: 'left',
      },
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
