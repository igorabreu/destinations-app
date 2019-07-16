import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.color.primaryColor};
  color: ${props =>
    props.filled ? `#fff` : props => props.theme.color.primaryColor};
  text-transform: uppercase;
  padding: 13px 30px;
  font-size: ${props => props.fontSize}px;
  cursor: pointer;
  border-radius: 23px;
  background-color: ${props =>
    props.filled ? props.theme.color.primaryColor : `#fff`};
  &:hover {
    background-color: ${props => props.theme.color.primaryColor};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
