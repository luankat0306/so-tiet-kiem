import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  AppBar as AppBarMui,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Location, Notification } from "iconsax-react";
import IconButton from "../button/IconButton";

const navMenu = ["Trang chủ", "Giới thiệu", "So sánh", "Liên hệ"];

const AppBar = () => {
  const renderNavMenu = navMenu.map((i, index) => (
    <Button color={index === 0 ? "primary" : "inherit"} key={index}>
      {i}
    </Button>
  ));
  return (
    <Box
      sx={{
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.1)",
        height: "50px",
      }}
    >
      <Container
        sx={{
          paddingY: 1,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {/* <Image height={36} width={164} src="logo.svg" alt="Logo" /> */}
            {renderNavMenu}
          </Stack>
          <Box flex={1} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              divider={
                <Divider
                  sx={{
                    height: "12px",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                />
              }
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Button color="inherit">Đăng nhập</Button>
              <Button color="inherit">Đăng ký tài khoản</Button>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton icon={Location} />
              <IconButton icon={Notification} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AppBar;
