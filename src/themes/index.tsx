// material
import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import PropTypes from "prop-types";
import { ReactNode, useMemo } from "react";
//
import palette from "./palette";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
// ----------------------------------------------------------------------

const cache = createEmotionCache();

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

interface ThemeConfigProps {
  children: ReactNode;
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      components: {
        MuiButton: {
          defaultProps: {
            disableElevation: true,
          },
          variants: [
            {
              props: { color: "inherit" },
              style: {
                color: palette.text?.primary,
              },
            },
          ],
        },
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
