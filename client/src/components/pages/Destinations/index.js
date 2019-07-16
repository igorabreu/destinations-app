import React, { Component } from "react"
import { API } from "../../../services/API"
import { HomeWrapper } from "./styles"

class Home extends Component {
  componentDidMount() {
    API.getDestinations().then(res => {
      console.log(res)
    })
  }

  render() {
    return <HomeWrapper />
  }
}

export default Home
