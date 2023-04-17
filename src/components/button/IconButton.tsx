import { Box, ButtonBase, ButtonBaseProps, useTheme } from "@mui/material";
import { Icon } from "iconsax-react";

interface Props extends ButtonBaseProps {
  icon: Icon;
}

const IconButton = ({ icon, ...props }: Props) => {
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
      <ButtonBase
        sx={(theme) => ({
          width: "32px",
          height: "32px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
        color="primary"
        {...props}
      >
        <Icon
          variant="Bulk"
          size={18}
          color={theme.palette.primary.contrastText}
        />
      </ButtonBase>
    </Box>
  );
};

export default IconButton;
