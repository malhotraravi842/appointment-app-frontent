import React from "react";
import { Formik, Form, Field } from "formik";

const Login = () => {
  const initialValues = () => {
    return {
      email: "",
      password: "",
    };
  };

  const submitHandler = () => {
    console.log("form submitted");
  };
  return (
    <div className="login__container">
      <h1>Login</h1>
      <div className="login__form">
        <Formik initialValues={initialValues()} onSubmit={submitHandler}>
          {({ values }) => (
            <Form>
              <Field type="email" name="email" />
              <Field type="password" name="password" />

              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
