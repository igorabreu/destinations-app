import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: ${props => props.theme.color.paleGrey};
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`;

export const SignUpLink = styled.div`
  color: ${props => props.theme.color.steel};
  text-align: center;
  cursor: pointer;
  font-family: ${props => props.theme.font};
  transform: translateY(-200px);
  position: relative;
  z-index: 9999;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;
