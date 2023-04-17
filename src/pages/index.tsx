import AutocompleteField from "@/components/form/AutocompleteField";
import AppBar from "@/components/header/AppBar";
import AppBar2 from "@/components/header/AppBar2";
import TopBar from "@/components/header/TopBar";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";
import ProductCard from "./ProductCard";
import { Send } from "iconsax-react";

const inter = Inter({ subsets: ["latin"] });

const products = [
  {
    logo: "/images/vb.png",
    maHS: "MHS001",
    kyHan: 12,
    moTa: `It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with`,
    laiSuat: 7.9,
    soTien: "1 tỉ 500",
  },
  {
    logo: "/images/acb.png",
    maHS: "MHS002",
    kyHan: 12,
    moTa: `It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with`,
    laiSuat: 7.9,
    soTien: "1 tỉ 500",
  },
  {
    logo: "/images/ocb.png",
    maHS: "MHS003",
    kyHan: 12,
    moTa: `It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with`,
    laiSuat: 7.9,
    soTien: "1 tỉ 500",
  },
  {
    logo: "/images/bsh.png",
    maHS: "MHS004",
    kyHan: 12,
    moTa: `It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with`,
    laiSuat: 7.9,
    soTien: "1 tỉ 500",
  },
];
export default function Home() {
  return (
    <Box>
      <Head>
        <title>Sổ tiết kiệm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <TopBar />
        <AppBar />
        <AppBar2 />
        <Container>
          <Divider />
        </Container>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Card>
                <CardContent>
                  <Stack spacing={2}>
                    <AutocompleteField
                      label="Tỉnh/Thành Phố"
                      options={["Hồ Chí Minh", "Hà Nội"]}
                    />
                    <AutocompleteField
                      label="Quận/Huyện"
                      options={["Hồ Chí Minh", "Hà Nội"]}
                    />
                    <AutocompleteField
                      label="Ngân hàng"
                      options={["Hồ Chí Minh", "Hà Nội"]}
                    />
                    <AutocompleteField
                      label="Số tiền chuyển nhượng"
                      options={["Hồ Chí Minh", "Hà Nội"]}
                    />
                    <AutocompleteField
                      label="Kỳ hạn"
                      options={["Hồ Chí Minh", "Hà Nội"]}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item md={9} spacing={2}>
              {products.map((i) => (
                <Grid key={i.maHS} item md={6}>
                  <ProductCard {...i} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 2,
              backgroundColor: "#D7E3F4",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "4px 4px 4px 12px",
              borderRadius: "8px",
            }}
          >
            <Typography>
              Để lại thông tin liên hệ của bạn, chúng tôi sẽ liên lạc lại ngay
            </Typography>
            <Box
              sx={{
                border: "1px solid #A0B8D9",
                borderRadius: "8px",
                width: "300px",
                backgroundColor: "#FFFFFF",
                padding: "4px 8px",
              }}
            >
              <InputBase
                placeholder="Nhập số điện thoại hoặc email"
                endAdornment={<Send variant="Bulk" color="#256CFE" />}
                fullWidth
              />
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            mt: 2,
            backgroundColor: "#256CFE",
            width: "100%",
          }}
        >
          <Container
            sx={{
              display: "flex",
              gap: 15,
              py: 5,
            }}
          >
            <Box
              sx={{
                flex: 2,
              }}
            >
              <Typography textTransform="uppercase" color="#FFFFFF">
                Về chúng tôi
              </Typography>
              <Typography mt={2} color="#A0B8D9" textAlign="justify">
                Chúng tôi cung cấp dịch vụ so sánh lãi suất gửi tiết kiệm có
                thời hạn ở các ngân hàng Việt Nam và là một công cụ hữu ích giúp
                khách hàng quyết định đầu tư tiền nhàn rỗi vào sản phẩm tiết
                kiệm một cách thông minh và hiệu quả.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography textTransform="uppercase" noWrap color="#FFFFFF">
                Chăm sóc khách hàng
              </Typography>
              <Typography mt={2} color="#A0B8D9">
                Trung tâm trợ giúp
              </Typography>
              <Typography mt={1} color="#A0B8D9">
                Hướng dẫn sử dụng
              </Typography>
              <Typography mt={1} color="#A0B8D9">
                Chính sách bảo hành
              </Typography>
              <Typography mt={1} color="#A0B8D9">
                Chăm sóc khách hàng
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography textTransform="uppercase" noWrap color="#FFFFFF">
                Theo dõi chúng tôi
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Typography textTransform="uppercase" noWrap color="#FFFFFF">
                Tải ứng dụng
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
