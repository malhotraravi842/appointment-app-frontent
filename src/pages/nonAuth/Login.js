import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Formik, Form } from "formik";
import { TextInput } from "../../components/FormInput";
import PasswordInput from "../../components/FormInput/PasswordInput";
import { Button } from "../../components/Button";

const Login = (props) => {
  const { loader } = props;
  const initialValues = () => {
    return {
      email: "",
      password: "",
    };
  };

  const submitHandler = (values) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    props.loginUser(data);
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

              <Button type="submit" disabled={loader}>
                {loader ? "..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

const mapStateToProps = (state) => ({
  loader: state.auth.loader,
  error: state.auth.authError,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
