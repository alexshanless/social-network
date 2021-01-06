import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "./../../redux/auth-reducer";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={required}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={required}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        Remember Me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);