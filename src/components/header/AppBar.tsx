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
import ButtonIcon from "@/components/button/ButtonIcon";
const navMenu = ["Trang chủ", "Giới thiệu", "So sánh", "Liên hệ"];

const AppBar = () => {
  const renderNavMenu = navMenu.map((i, index) => (
    <Button color={index === 0 ? "primary" : "inherit"} key={index}>
      {i}
    </Button>
  ));
  return (
    <AppBarMui elevation={2} color="default" position="static">
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
            <Image height={36} width={164} src="logo.svg" alt="Logo" />
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
              <ButtonIcon icon={Location} />
              <ButtonIcon icon={Notification} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </AppBarMui>
  );
};

export default AppBar;
