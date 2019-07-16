import React, { useState } from "react";
//import PropTypes from "prop-types";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import { CardWrapper, DestinationItem, Name, OpenIcon } from "./styles";

const DestinationCard = () => {
  let [isOpen, toggleOpenCard] = useState(false);
  return (
    <CardWrapper>
      {!isOpen ? (
        <DestinationItem onClick={() => toggleOpenCard(true)}>
          <Name>Turquia</Name>
          <OpenIcon>+++</OpenIcon>
        </DestinationItem>
      ) : (
        <React.Fragment>
          <Input
            type="text"
            name="country"
            placeholder="country"
            autocomplete="country"
            value={"Turquia"}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="text"
            name="city"
            placeholder="city"
            autocomplete="city"
            value={"Istambul"}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="date"
            name="startDate"
            placeholder="start date"
            autocomplete="startDate"
            value={13 / 10 / 1990}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="date"
            name="endDate"
            placeholder="end date"
            autocomplete="endDate"
            value={13 / 10 / 1990}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="date"
            name="hotelAddress"
            placeholder="hotel address"
            autocomplete="hotelAddress"
            value={"Rua Silveira Martins, 30, ap 1109"}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="number"
            name="numberOfTravellers"
            placeholder="number of travallers"
            autocomplete="numberOfTravellers"
            value={9}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
          <Input
            type="number"
            name="spendingBudget"
            placeholder="spending budget"
            autocomplete="spendingBudget"
            value={1000}
            handleInputChange={e => console.log(e)}
            error={false}
            resetError={() => console.log()}
          />
        </React.Fragment>
      )}
    </CardWrapper>
  );
};

export default DestinationCard;
