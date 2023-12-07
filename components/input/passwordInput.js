import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import ErrorMessage from "../errorMessage";

function PasswordInput({ label = "Password", errorMsg, ...rest }, ref) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      gap={1}
    >
      <InputLabel htmlFor="name">{label}</InputLabel>
      <OutlinedInput
        size="small"
        type={showPassword ? "text" : "password"}
        {...rest}
        ref={ref}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder="******"
      />
      {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
    </Box>
  );
}

export default forwardRef(PasswordInput);
