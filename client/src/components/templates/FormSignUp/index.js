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
  ButtonWrapper,
  CancelWrapper
} from "./styles";

const FormSignUp = ({
  handleInputChange,
  handleSubmit,
  userNewAccount,
  error,
  resetError,
  onCancel
}) => {
  return (
    <FormWrapper>
      <FormContainer>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <FormBox>
          <FormContent>
            <MainLabel>Sign Up</MainLabel>
            <Input
              type="email"
              name="email"
              placeholder="email"
              autocomplete="email"
              value={userNewAccount && userNewAccount.email}
              handleInputChange={e => handleInputChange(e)}
              error={error}
              resetError={() => resetError()}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              autocomplete="password"
              value={userNewAccount && userNewAccount.password}
              handleInputChange={e => handleInputChange(e)}
              error={error}
              resetError={() => resetError()}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              autocomplete="confirmPassword"
              value={userNewAccount && userNewAccount.confirmPassword}
              handleInputChange={e => handleInputChange(e)}
              error={error}
              resetError={() => resetError()}
            />
            <ButtonWrapper>
              <Button
                type="submit"
                text="Sing Up"
                filled={true}
                onClick={e => handleSubmit(e)}
                fontSize={16}
              />
              <CancelWrapper>
                <Button
                  type="submit"
                  text="Cancel"
                  filled={false}
                  onClick={e => onCancel(e)}
                  fontSize={16}
                />
              </CancelWrapper>
            </ButtonWrapper>
          </FormContent>
        </FormBox>
      </FormContainer>
    </FormWrapper>
  );
};

FormSignUp.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  userNewAccount: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPass: PropTypes.string
  }),
  error: PropTypes.bool,
  resetError: PropTypes.func
};

export default FormSignUp;
