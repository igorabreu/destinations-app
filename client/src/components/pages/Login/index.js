import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuth } from "../../../store/actions";
import FormLogin from "../../templates/FormLogin";
import { LoginPage } from "./styles";
import { API } from "../../../services/API";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        password: ""
      },
      error: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setAuthTrue = (token, user_id, user_email) => {
    return this.props.dispatch(setAuth(true, token, user_id, user_email));
  };

  handleInputChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]:
          e.target.name === "keepLogin"
            ? !this.state.formData.keepLogin
            : e.target.value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formData } = this.state;

    API.userLogin({
      username: formData.username,
      password: formData.password
    }).then(res => {
      if (res.ok) {
        res.json().then(res => {
          if (res.success) {
            this.setAuthTrue(res.data.token, res.user_id, formData.username);
          } else {
            this.setState({
              error: true
            });
          }
        });
      } else {
        this.setState({
          error: true
        });
      }
    });
  }

  resetError = () => {
    this.setState({
      error: false
    });
  };

  render() {
    const { userAuth, textContent } = this.props;
    const { formData, error } = this.state;
    console.log(userAuth);
    if (userAuth) return <Redirect to="/destinations" />;
    return (
      <LoginPage>
        <FormLogin
          formData={formData}
          handleInputChange={e => this.handleInputChange(e)}
          handleSubmit={e => this.handleSubmit(e)}
          error={error}
          resetError={() => this.resetError()}
          textContent={textContent}
        />
      </LoginPage>
    );
  }
}

const mapStateToProps = store => ({
  userAuth: store.userAuth.auth_status
});

export default connect(mapStateToProps)(Login);
