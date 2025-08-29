import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";
import NavBar from "./NavBar";
import { red } from "@mui/material/colors";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { MAIN_THEME_COLOR } from "@/constants";

export default function Layout({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useLocalStorage("useDarkMode", true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          error: {
            main: red[400],
          },
          primary: {
            main: MAIN_THEME_COLOR,
            light: "#4CAF50",
            dark: "#1B5E20",
            contrastText: "#ffffff",
          },
          secondary: {
            main: isDarkMode ? "#424242" : "#f5f5f5",
            light: isDarkMode ? "#616161" : "#ffffff",
            dark: isDarkMode ? "#212121" : "#c7c7c7",
          },
          background: {
            default: isDarkMode ? "#121212" : "#fafafa",
            paper: isDarkMode ? "#1e1e1e" : "#ffffff",
          },
          text: {
            primary: isDarkMode ? "#ffffff" : "#212121",
            secondary: isDarkMode ? "#b3b3b3" : "#757575",
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h6: {
            fontWeight: 600,
            letterSpacing: "0.5px",
          },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: isDarkMode 
                  ? "0 2px 20px rgba(0, 0, 0, 0.3)" 
                  : "0 2px 20px rgba(0, 0, 0, 0.1)",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                boxShadow: isDarkMode 
                  ? "0 4px 20px rgba(0, 0, 0, 0.3)" 
                  : "0 4px 20px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  if (isDarkMode === null) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        darkMode={isDarkMode}
        switchDarkMode={() => setDarkMode((val) => !val)}
      />
      <main style={{ 
        margin: "2vh 2vw", 
        minHeight: "calc(100vh - 80px)",
        background: `linear-gradient(135deg, ${isDarkMode ? '#1a1a1a' : '#f8f9fa'} 0%, ${isDarkMode ? '#2d2d2d' : '#ffffff'} 100%)`
      }}>
        {children}
      </main>
    </ThemeProvider>
  );
}
