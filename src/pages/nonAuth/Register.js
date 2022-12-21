import { Form, Formik } from "formik";
import React from "react";
import { TextInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import * as Yup from "yup";
import { registerUser } from "../../lib/api";
import { withAlert } from "react-alert";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(5).required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Register = ({ alert }) => {
  const initialValues = () => {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  };

  const onFormSubmit = (values, { resetForm, setSubmitting }) => {
    let data = {
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    };

    registerUser(data)
      .then((res) => {
        alert.show(res && res.data.message);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="register__container">
      <h1>Register</h1>
      <div className="register__form">
        <Formik
          initialValues={initialValues()}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <TextInput
                label="Full Name"
                type="fullName"
                name="fullName"
                placeholder="Ravi Chaudhary"
                error={errors.fullName && touched.fullName}
              />
              <TextInput
                label="Email"
                type="email"
                name="email"
                placeholder="ravi@lcx.com"
                error={errors.email && touched.email}
              />
              <TextInput
                label="Password"
                type="password"
                name="password"
                placeholder="*****"
                error={errors.password && touched.password}
              />
              <TextInput
                label="Confirm Password"
                type="confirmPassword"
                name="confirmPassword"
                placeholder="*****"
                error={errors.confirmPassword && touched.confirmPassword}
              />
              <Button label="Register" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withAlert()(Register);
