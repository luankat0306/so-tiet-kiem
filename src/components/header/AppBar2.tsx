import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
const navMenu = ["Trang chủ", "Giới thiệu", "So sánh", "Liên hệ"];

const AppBar2 = () => {
  return (
    <Container
      sx={{
        paddingY: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
            <Button>Danh sách chuyển nhượng</Button>
            <Button color="inherit">Danh sách nhận chuyển nhượng</Button>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            size="small"
            sx={{
              width: "200px",
            }}
            label="Sắp xếp kết quả"
            select
          >
            <MenuItem>Kỳ hạn</MenuItem>
            <MenuItem>Lãi xuất</MenuItem>
          </TextField>

          <Button variant="contained">Đăng ký chuyển nhượng</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AppBar2;
