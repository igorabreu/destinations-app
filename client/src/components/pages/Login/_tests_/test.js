import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import Login from "../../Login"
import rootReducer from "../../../../store/reducers"

const store = createStore(rootReducer)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
