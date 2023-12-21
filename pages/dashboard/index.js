import Input from "@/components/input";
import apiInstance from "@/lib/http";
import { Button, Stack } from "@mui/material";
import { signOut } from "next-auth/react";
import MuiInput from "@mui/material/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { carsSchema } from "@/validationSchema/carSchema";
import { toast } from "react-toastify";

export default function Index() {
  const createCars = async (carsData) => {
    try {
    const {data}= await apiInstance.post("cars", carsData);
      console.log(data)
      
      toast.success("car add is created");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(carsSchema),
  });

  const onSubmit = (data) => {
    createCars(data);
  };

  return (
    <>
      <div>Create a Card Add</div>
      <Button onClick={() => signOut()}>logout</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={3}
          sx={{
            paddingX: {
              xs: 2,
              md: 30,
              sm: 10,
              lg: 50,
            },
          }}
        >
          <Input
            errorMsg={errors?.model?.message}
            label="Card Model"
            {...register("model")}
          />
          <Input
            errorMsg={errors?.price?.message}
            label="Price"
            {...register("price")}
          />
          <Input
            errorMsg={errors?.phone_number?.message}
            label="Phone Number"
            {...register("phone_number")}
          />
          <MuiInput type="file" />
          <Stack
            alignItems={"center"}
            marginTop={3}
            gap={1}
            direction={"column"}
          >
            <Button
              type="submit"
              style={{ padding: "15px 60px" }}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}
