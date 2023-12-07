import * as yup from "yup";

export const carsSchema = yup
  .object({
    model: yup.string().required().min(3),
    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Price is required")
      .nullable(),
    phone_number: yup
      .number()
      .typeError("phone number must be a number")
      .test(
        "is-11-digits",
        "Phone number must be exactly 11 digits",
        (value) => String(value).length === 11
      ),
  })
  .required();
