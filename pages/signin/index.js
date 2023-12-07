import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema } from "../../validationSchema/loginSchema";
import Image from "next/image";
import PasswordInput from "@/components/input/passwordInput";
import EmailInput from "@/components/input/emailInput";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    const result = await signIn("credentials", { redirect: false, ...data });
    if (!result?.error && result?.ok) {
      toast.success("you are logged in");
      router.push("/dashboard");
    } else if (result.error == "CredentialsSignin") {
      toast.error("invalid CredentialsSignin");
    } else {
      toast.error("server error");
    }
  };
  return (
    <Stack direction={"row"}>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Grid py={3.5} align='center'>
          <Image
            src={"https://assets.vonza.com/static/v3/landingpage/v-blue.svg"}
            alt=''
            height={60}
            width={60}
          />
          <Typography fontWeight={700} variant='h4'>
            Desolint
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            gap={3}
            sx={{
              paddingX: {
                xs: 2,
                md: 15,
                sm: 10,
              },
            }}
          >
            <EmailInput
              errorMsg={errors.email?.message}
              {...register("email")}
            />
            <PasswordInput
              errorMsg={errors?.password?.message}
              {...register("password")}
            />
            <Stack
              alignItems={"center"}
              marginTop={3}
              gap={1}
              direction={"column"}
            >
              <Button
                type='submit'
                style={{ padding: "15px 60px" }}
                color='primary'
                variant='contained'
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
      <Stack
        sx={{ display: { xs: "none", md: "flex" } }}
        alignItems={"center"}
        width={"50%"}
        bgcolor={"blue"}
        pb={9}
      >
        <Image
          alt=''
          width={400}
          height={500}
          src={"https://assets.vonza.com/static/2023/loginpage/login.svg"}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
