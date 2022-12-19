import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import { Formik, Form, Field } from "formik";

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

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUser()),
});

export default compose(connect(null, mapDispatchToProps))(Login);
