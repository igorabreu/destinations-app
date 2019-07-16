import React, { Component } from "react";
import { API } from "../../../services/API";
import DestinationCard from "../../templates/DestinationCard";
import { DestinationsWrapper, Title, DestinationList } from "./styles";

class Home extends Component {
  componentDidMount() {
    API.getDestinations().then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <DestinationsWrapper>
        <Title>Destinations</Title>
        <DestinationList>
          <DestinationCard />
        </DestinationList>
      </DestinationsWrapper>
    );
  }
}

export default Home;
