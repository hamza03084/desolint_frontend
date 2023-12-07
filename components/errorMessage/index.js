import { Typography } from "@mui/material";
export default function ErrorMessage({ errorMsg }) {
  return (
    <Typography
      fontSize={"13px"}
      bottom={-22}
      left={10}
      position={"absolute"}
      color={"red"}
    >
      {errorMsg}
    </Typography>
  );
}
