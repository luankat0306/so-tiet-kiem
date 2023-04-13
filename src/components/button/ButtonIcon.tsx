import { Box, useTheme } from "@mui/material";
import { Icon } from "iconsax-react";
import React from "react";

type Props = {
  icon: Icon;
};

const ButtonIcon = ({ icon }: Props) => {
  const Icon = icon;
  const theme = useTheme();
  return (
    <Box
      sx={(theme) => ({
        width: "36px",
        height: "36px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "32px",
          height: "32px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Icon
          variant="Bulk"
          size={18}
          color={theme.palette.primary.contrastText}
        />
      </Box>
    </Box>
  );
};

export default ButtonIcon;
