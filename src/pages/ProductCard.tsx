import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Call } from "iconsax-react";
import Image from "next/image";

interface ProductCardProps {
  logo: string;
  maHS: string;
  kyHan: number;
  moTa: string;
  laiSuat: number;
  soTien: string;
}
const ProductCard = ({
  logo,
  maHS,
  kyHan,
  moTa,
  laiSuat,
  soTien,
}: ProductCardProps) => {
  return (
    <Card>
      <CardContent>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "4px 8px",
              border: "1px solid #A0B8D9",
              borderRadius: "12px",
              height: "56px",
              width: "110px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                style={{
                  objectFit: "contain",
                }}
                fill
                alt={maHS}
                src={logo}
              />
            </Box>
          </Box>

          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#828282",
              }}
            >
              Mã hồ sơ: {maHS}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.15rem",
                fontWeight: "bold",
                color: "#3A3A42",
              }}
            >
              Sổ tiết kiệm kỳ hạn {kyHan} tháng
            </Typography>
          </Stack>
        </Stack>

        <Divider
          sx={{
            my: 2,
          }}
        />

        <Stack
          sx={{
            height: "96px",
          }}
          direction="row"
          spacing={2}
        >
          <Typography
            sx={{
              flex: 4,
              color: "#6D6D6D",
              display: "-webkit-box",
              "-webkit-line-clamp": "4",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {moTa}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#E8F1FF",
              color: "#0061F4",
              borderRadius: "16px",
              width: "80px",
              padding: 1,
              flex: 1,
            }}
          >
            <Stack alignItems="center">
              <Typography
                sx={{
                  fontSize: "0.75rem",
                }}
              >
                Lãi suất
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.75rem",
                }}
              >
                {laiSuat}%
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                }}
              >
                (12 tháng)
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box
          sx={{
            mt: 2,
            padding: "4px 4px 4px 16px",
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            border: "1px solid #A0B8D9",
            borderRadius: "30px",
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Typography>Số tiền: {soTien}</Typography>
          <Box
            sx={{
              width: "8px",
              height: "0px",
              border: "1px solid #A0B8D9",
              transform: "rotate(90deg)",
            }}
          />
          <Typography>Kỳ hạn: {kyHan} tháng</Typography>
          <Box
            sx={{
              background: "#A0B8D9",
              borderRadius: "30px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              order: 1,
              flexGrow: 0,
            }}
          >
            <Call variant="Bulk" color="#fff" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ProductCard;

ProductCard.defaultProps = {
  logo: "",
  maHS: "MHS001",
  kyHan: 12,
  moTa: `It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with`,
  laiSuat: 7.9,
  soTien: "1 tỉ 500",
};
