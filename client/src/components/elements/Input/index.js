import React, { Component } from "react";
import PropTypes from "prop-types";
import { SimpleInput, InputWrapper, Placeholder, ActiveSign } from "./styles";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.inputRef = React.createRef();
  }

  static propTypes = {
    type: PropTypes.string,
    status: PropTypes.string,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    type: "text",
    status: "default",
    placeholder: "",
    autocomplete: "",
    name: "",
    value: ""
  };

  handleInputFocus(bool) {
    const { resetError } = this.props;
    if (resetError) {
      this.props.resetError();
    }
    this.setState({
      focused: bool
    });
  }

  setFocus() {
    this.inputRef.current.focus();
    this.handleInputFocus(true);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e);
  }

  render() {
    const {
      type,
      status,
      placeholder,
      autocomplete,
      value,
      name,
      error
    } = this.props;
    const { focused } = this.state;
    return (
      <InputWrapper>
        <Placeholder
          onClick={() => this.setFocus(true)}
          placedOnTop={focused || value !== "" || type === "date"}
        >
          {placeholder}
        </Placeholder>
        <SimpleInput
          ref={this.inputRef}
          type={type}
          status={status}
          onFocus={() => this.handleInputFocus(true)}
          onBlur={() => this.handleInputFocus(false)}
          onChange={e => this.handleInputChange(e)}
          value={value}
          name={name}
          autoComplete={autocomplete}
          error={error}
        />
        <ActiveSign active={focused} error={error} />
      </InputWrapper>
    );
  }
}

export default Input;
