import { Form, Formik } from "formik";
import React from "react";
import { TextInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

const Register = () => {
  const initialValues = () => {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    };
  };
  return (
    <div className="register__container">
      <h1>Register</h1>
      <div className="register__form">
        <Formik initialValues={initialValues()}>
          {({ values }) => (
            <Form>
              <TextInput
                label="Full Name"
                type="fullName"
                name="fullName"
                placeholder="Ravi Chaudhary"
              />
              <TextInput
                label="Email"
                type="email"
                name="email"
                placeholder="ravi@lcx.com"
              />
              <TextInput
                label="Password"
                type="password"
                name="password"
                placeholder="*****"
              />
              <TextInput
                label="Confirm Password"
                type="confirmPassword"
                name="confirmPassword"
                placeholder="*****"
              />
              <Button label="Register">Register</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
