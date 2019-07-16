import React from "react";
import PropTypes from "prop-types";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import {
  FormWrapper,
  FormContainer,
  WelcomeTitle,
  FormBox,
  MainLabel,
  FormContent,
  ButtonWrapper
} from "./styles";

const FormLogin = ({
  handleInputChange,
  handleSubmit,
  formData,
  error,
  resetError,
  textContent
}) => {
  return (
    <FormWrapper>
      <FormContainer>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <FormBox>
          <FormContent>
            <MainLabel>Login</MainLabel>
            <Input
              type="email"
              name="username"
              placeholder="username"
              autocomplete="username"
              value={formData && formData.username}
              handleInputChange={e => handleInputChange(e)}
              error={error}
              resetError={() => resetError()}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              autocomplete="current-password"
              value={formData && formData.password}
              handleInputChange={e => handleInputChange(e)}
              error={error}
              resetError={() => resetError()}
            />
            <ButtonWrapper>
              <Button
                type="submit"
                text="Sing In"
                filled={true}
                onClick={e => handleSubmit(e)}
                fontSize={16}
              />
            </ButtonWrapper>
          </FormContent>
        </FormBox>
      </FormContainer>
    </FormWrapper>
  );
};

FormLogin.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    keepLogin: PropTypes.bool.isRequired
  }),
  error: PropTypes.bool,
  resetError: PropTypes.func
};

export default FormLogin;
