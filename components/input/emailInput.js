import { Box, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { forwardRef } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ErrorMessage from "../errorMessage";
function EmailInput({ errorMsg, ...rest }, ref) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      gap={1}
    >
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <OutlinedInput
        size="small"
        ref={ref}
        placeholder="Enter Your Email"
        endAdornment={
          <InputAdornment position="end">
            <AlternateEmailIcon />
          </InputAdornment>
        }
        {...rest}
      />
      {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
    </Box>
  );
}

export default forwardRef(EmailInput);
