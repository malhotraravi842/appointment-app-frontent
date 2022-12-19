import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Formik, Form, Field } from "formik";
import { TextInput } from "../../components/FormInput";
import PasswordInput from "../../components/FormInput/PasswordInput";
import { Button } from "../../components/Button";

const Login = (props) => {
  const initialValues = () => {
    return {
      email: "",
      password: "",
    };
  };

  const submitHandler = () => {
    props.loginUser();
  };

  return (
    <div className="login__container">
      <h1>Login</h1>
      <div className="login__form">
        <Formik initialValues={initialValues()} onSubmit={submitHandler}>
          {({ values }) => (
            <Form>
              <TextInput
                label="Email"
                type="email"
                name="email"
                placeholder="ravi@lcx.com"
              />
              <PasswordInput
                label="Password"
                name="password"
                placeholder="*****"
              />

              <Button type="submit" label="Login" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUser()),
});

export default compose(connect(null, mapDispatchToProps))(Login);
