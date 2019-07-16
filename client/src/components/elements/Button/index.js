import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styles"

const Button = ({ filled, onClick, text, type, fontSize }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      filled={filled}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  filled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
