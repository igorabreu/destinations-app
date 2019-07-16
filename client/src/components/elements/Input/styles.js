import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

export const SimpleInput = styled.input`
  height: 60px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px
    ${props =>
      props.error ? props.theme.color.errorColor : props.theme.color.steel};
  background-color: #ffffff;
  font-size: 20px;
  color: ${props =>
    props.error
      ? props.theme.color.errorColor
      : props.theme.color.primaryColor};
  padding: 16px 10px 1px 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: solid 1px
      ${props =>
        props.error
          ? props.theme.color.errorColor
          : props.theme.color.primaryColor};
  }
`;

export const IconError = styled.img`
  width: 8px;
  height: 8px;
  transform: translate(4px, -2px);
`;

export const ActiveSign = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${props =>
    props.error
      ? props.theme.color.errorColor
      : props.theme.color.primaryColor};
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 16px;
  right: -8px;
  display: ${props => (props.active || props.error ? `inline-block` : `none`)};

  ${IconError} {
    display: ${props => (props.error ? `inline-block` : `none`)};
  }
`;

export const Placeholder = styled.label`
  color: ${props => props.theme.color.steel};
  font-family: ${props => props.theme.font};
  font-size: ${props => (props.placedOnTop ? `16px` : `18px`)};
  position: absolute;
  font-weight: normal;
  top: ${props => (props.placedOnTop ? `7px` : `16px`)};
  left: 10px;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
