import { Autocomplete, TextField } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  options: any[];
};

const AutocompleteField = (props: Props) => {
  const { label, options } = props;
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
      <Autocomplete
        disablePortal
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            fullWidth
            placeholder="Vui lòng chọn thông tin"
          />
        )}
      />
    </Stack>
  );
};

export default AutocompleteField;
