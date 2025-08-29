import { Box } from "@mui/material";
import { Icon } from "@iconify/react";
import { ReactElement } from "react";

interface ChessAnalyzerLogoProps {
  darkMode: boolean;
  size?: number;
}

export default function ChessAnalyzerLogo({
  darkMode,
  size = 32,
}: ChessAnalyzerLogoProps): ReactElement {
  const color = darkMode ? "#FFFFFF" : "#2E8B57";

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Icon icon="mdi:chess-knight" width={size} height={size} color={color} />
    </Box>
  );
}
