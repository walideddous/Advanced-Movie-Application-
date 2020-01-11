import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from '../services/authService'
import * as useService from '../services/registerService';

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().email()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    try{
      const response=await useService.register(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location='/';

    }
    catch(ex){
      if(ex.response && ex.response.status ===400){
        const errors = {...this.state.errors}
        errors.username= ex.response.data
        this.setState({errors});
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
