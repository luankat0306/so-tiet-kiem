import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#D7E3F4",
        paddingY: 1,
      }}
    >
      <Container>
        <Stack
          spacing={2}
          divider={
            <Divider
              sx={{
                height: "8px",
                alignSelf: "center",
              }}
              orientation="vertical"
              flexItem
            />
          }
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#6D6D6D",
              fontStyle: "normal",
            }}
          >
            Hotline 24/7: 08 123 456 789
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#6D6D6D",
            }}
          >
            info@f5seconds.vn
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default TopBar;
