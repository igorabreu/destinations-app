import React from "react"
import ReactDOM from "react-dom"
import InputLogin from ".."

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<InputLogin />, div)
  ReactDOM.unmountComponentAtNode(div)
})
