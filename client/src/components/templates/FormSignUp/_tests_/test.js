import React from "react"
import ReactDOM from "react-dom"
import FormLogin from ".."

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FormLogin />, div)
  ReactDOM.unmountComponentAtNode(div)
})
