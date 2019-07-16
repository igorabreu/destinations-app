import React, { Component } from "react";
import { API } from "../../../services/API";
import { setAuth } from "../../../store/actions";
import { connect } from "react-redux";
import DestinationCard from "../../templates/DestinationCard";
import NewItem from "../../templates/NewItem";
import iconPlus from "../../../assets/images/plus-icon.svg";
import logoutIcon from "../../../assets/images/logout-icon.svg";
import {
  DestinationsWrapper,
  MainHeader,
  Title,
  DestinationList,
  IconPlus,
  AddNew,
  Logout,
  LogoutIcon
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
    this.handleDeleteDestination = this.handleDeleteDestination.bind(this);
    this.handleEditionInput = this.handleEditionInput.bind(this);
    this.handleEditDestination = this.handleEditDestination.bind(this);
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

  handleDestinationCreation() {
    const { newDestination } = this.state;
    API.createNewDestination(newDestination).then(res => {
      this.getDestinationsList();
      this.onCancelNewItem();
    });
  }

  handleDeleteDestination(destinationId) {
    API.deleteDestination(destinationId).then(res => {
      this.getDestinationsList();
    });
  }

  handleEditDestination(destinationId, index) {
    const { listItems } = this.state;
    API.editDestination(destinationId, listItems[index]).then(res => {
      this.getDestinationsList();
    });
  }

  handleEditionInput(e, index) {
    const { listItems } = this.state;
    const newEditedItem = {
      ...listItems[index],
      [e.target.name]: e.target.value
    };
    const newEditedList = [...listItems];
    newEditedList[0] = newEditedItem;

    this.setState({
      listItems: newEditedList
    });
  }

  getDestinationsList() {
    API.getDestinations().then(res => {
      this.setState({
        listItems: res.data
      });
    });
  }

  handleLogout = () => {
    return this.props.dispatch(setAuth(false));
  };

  componentDidMount() {
    this.getDestinationsList();
  }

  render() {
    const { newDestination, listItems } = this.state;
    return (
      <DestinationsWrapper>
        <Logout onClick={() => this.handleLogout()}>
          Log Out <LogoutIcon src={logoutIcon} />
        </Logout>
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
                key={destination._id}
                onDelete={() => this.handleDeleteDestination(destination._id)}
                onEdit={() =>
                  this.handleEditDestination(destination._id, index)
                }
                handleInputChange={e => this.handleEditionInput(e, index)}
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

export default connect()(Home);
