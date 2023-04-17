import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {
  label: string;
};

const InputField = (props: Props) => {
  const { label } = props;
  return (
    <Stack
      sx={{
        fontSize: "14px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          color: "#3A3A42",
          fontStyle: "normal",
          mb: "6px",
        }}
      >
        {label}
      </Typography>
      <TextField size="small" fullWidth placeholder="Vui lòng chọn thông tin" />
    </Stack>
  );
};

export default InputField;
