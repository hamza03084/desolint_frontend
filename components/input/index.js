import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { forwardRef } from "react";
import ErrorMessage from "../errorMessage";

function Input(
  { label = "", placeholder = "", errorMsg, ...rest },
  ref
) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      gap={1}
    >
      <InputLabel htmlFor="name">{label}</InputLabel>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        size="small"
        onBlur={rest.onBlur}
        ref={ref}
        {...rest}
      />

      {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
    </Box>
  );
}

export default forwardRef(Input);
