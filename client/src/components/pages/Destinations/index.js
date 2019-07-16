import React, { Component } from "react";
import { API } from "../../../services/API";
import DestinationCard from "../../templates/DestinationCard";
import NewItem from "../../templates/NewItem";
import iconPlus from "../../../assets/images/plus-icon.svg";
import {
  DestinationsWrapper,
  MainHeader,
  Title,
  DestinationList,
  IconPlus,
  AddNew
} from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: [],
      listItems: [],
      newDestination: false
    };
    this.handleNewItem = this.handleNewItem.bind(this);
    this.onCancelNewItem = this.onCancelNewItem.bind(this);
    this.onChangeNewItem = this.onChangeNewItem.bind(this);
    this.handleDestinationCreation = this.handleDestinationCreation.bind(this);
    this.getDestinationsList = this.getDestinationsList.bind(this);
  }

  handleNewItem() {
    this.setState({
      newDestination: {
        country: "",
        city: "",
        startDate: "",
        endDate: "",
        hotelAddress: "",
        numberOfTravellers: 0,
        spendingBudget: 0
      }
    });
  }

  onChangeNewItem(e) {
    const { newDestination } = this.state;
    this.setState({
      newDestination: {
        ...newDestination,
        [e.target.name]: e.target.value
      }
    });
  }

  onCancelNewItem() {
    this.setState({
      newDestination: null
    });
  }

  handleDestinationCreation = () => {
    const { newDestination } = this.state;
    API.createNewDestination(newDestination).then(res => {
      console.log(res);
      this.getDestinationsList();
    });
  };

  getDestinationsList() {
    API.getDestinations().then(res => {
      this.setState({
        listItems: res.data
      });
    });
  }

  componentDidMount() {
    this.getDestinationsList();
  }

  render() {
    const { newDestination, listItems } = this.state;
    return (
      <DestinationsWrapper>
        <MainHeader>
          <Title>Destinations</Title>
          <AddNew>
            Add New
            <IconPlus src={iconPlus} onClick={() => this.handleNewItem()} />
          </AddNew>
        </MainHeader>
        <DestinationList>
          {newDestination ? (
            <NewItem
              createNewDestination={() => this.handleDestinationCreation()}
              onCancel={() => this.onCancelNewItem()}
              handleInputChange={e => this.onChangeNewItem(e)}
              {...newDestination}
            />
          ) : null}
          {listItems.map((destination, index) => {
            return (
              <DestinationCard
                key={destination.id}
                index={index}
                {...destination}
              />
            );
          })}
        </DestinationList>
      </DestinationsWrapper>
    );
  }
}

export default Home;
