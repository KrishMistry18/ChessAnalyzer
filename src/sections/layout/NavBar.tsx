import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import NavLink from "@/components/NavLink";
import ChessAnalyzerLogo from "@/components/ChessAnalyzerLogo";

interface Props {
  darkMode: boolean;
  switchDarkMode: () => void;
}

export default function NavBar({ darkMode, switchDarkMode }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.pathname]);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
          color: darkMode ? "#ffffff" : "#2E8B57",
          borderBottom: `2px solid ${darkMode ? "#2E8B57" : "#2E8B57"}`,
          background: darkMode
            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        }}
        enableColorOnDark
      >
        <Toolbar variant="dense" sx={{ minHeight: "64px" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: "min(0.5vw, 0.6rem)",
              padding: 1.5,
              my: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: darkMode
                  ? "rgba(46, 139, 87, 0.1)"
                  : "rgba(46, 139, 87, 0.1)",
              },
            }}
            onClick={() => setDrawerOpen((val) => !val)}
          >
            <Icon icon="mdi:menu" />
          </IconButton>

          <ChessAnalyzerLogo darkMode={darkMode} size={32} />

          <NavLink href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                ml: 1.5,
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${darkMode ? "#4CAF50" : "#2E8B57"} 0%, ${darkMode ? "#66BB6A" : "#4CAF50"} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: darkMode
                  ? "0 0 20px rgba(76, 175, 80, 0.3)"
                  : "none",
                letterSpacing: "0.5px",
              }}
            >
              ChessAnalyzer
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />

          {/* Dark mode toggle */}
          <IconButton
            color="inherit"
            onClick={switchDarkMode}
            sx={{
              borderRadius: 2,
              "&:hover": {
                backgroundColor: darkMode
                  ? "rgba(46, 139, 87, 0.1)"
                  : "rgba(46, 139, 87, 0.1)",
              },
            }}
          >
            <Icon icon={darkMode ? "mdi:weather-sunny" : "mdi:weather-night"} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
