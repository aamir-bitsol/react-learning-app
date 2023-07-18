import * as yup from "yup";

const username = yup
          .string()
          .required("Username is required")
          .matches(/[a\-z+A\-Z]/, "Must be Alphabets")
          .test("len", "Must be at least 4 characters ", (val) => val.length > 3)

export const profileValidationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email(),
});

export const loginValidationSchema = yup.object({
    username,
    password: yup
         .string()
         .required("Password is required")
         .test("len", "Must be at least 6 characters ", (val) => val.length > 6),
});

