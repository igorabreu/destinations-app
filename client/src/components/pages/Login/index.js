import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuth } from "../../../store/actions";
import FormLogin from "../../templates/FormLogin";
import FormSignUp from "../../templates/FormSignUp";
import { LoginPage, SignUpLink } from "./styles";
import { API } from "../../../services/API";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        password: ""
      },
      userNewAccount: {},
      error: false,
      errorCreation: false,
      userSignUp: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNewAccount = this.handleSubmitNewAccount.bind(this);
  }

  setAuthTrue = () => {
    return this.props.dispatch(setAuth(true));
  };

  handleInputChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  }

  handleNewAccountChange(e) {
    this.setState({
      userNewAccount: {
        ...this.state.userNewAccount,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmitNewAccount(e) {
    e.preventDefault();
    const { userNewAccount } = this.state;
    const { email, password, confirmPassword } = userNewAccount;

    if (password === confirmPassword) {
      API.createUser({
        email: email,
        password: password
      }).then(res => {
        this.setState({
          userSignUp: false,
          formData: {
            username: "",
            password: ""
          }
        });
      });
    } else {
      this.setState({
        errorCreation: true
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formData } = this.state;

    API.userLogin({
      email: formData.email,
      password: formData.password
    }).then(res => {
      if (res.auth) {
        this.setAuthTrue();
      } else {
        this.setState({
          error: true
        });
      }
    });
  }

  handleSignUp = () => {
    this.setState({
      userSignUp: true
    });
  };

  resetError = () => {
    this.setState({
      error: false,
      errorCreation: false
    });
  };

  render() {
    const { userAuth } = this.props;
    const {
      formData,
      error,
      errorCreation,
      userSignUp,
      userNewAccount
    } = this.state;
    if (userAuth) return <Redirect to="/destinations" />;
    return (
      <LoginPage>
        {userSignUp ? (
          <FormSignUp
            userNewAccount={userNewAccount}
            handleInputChange={e => this.handleNewAccountChange(e)}
            handleSubmit={e => this.handleSubmitNewAccount(e)}
            error={errorCreation}
            resetError={() => this.resetError()}
          />
        ) : (
          <FormLogin
            formData={formData}
            handleInputChange={e => this.handleInputChange(e)}
            handleSubmit={e => this.handleSubmit(e)}
            error={error}
            resetError={() => this.resetError()}
          />
        )}
        {!userSignUp ? (
          <SignUpLink onClick={() => this.handleSignUp()}>
            Don't have an account yet?
            <br /> Click here to sign up
          </SignUpLink>
        ) : null}
      </LoginPage>
    );
  }
}

const mapStateToProps = store => ({
  userAuth: store.userAuth.auth_status
});

export default connect(mapStateToProps)(Login);
