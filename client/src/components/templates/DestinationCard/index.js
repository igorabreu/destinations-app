import React, { useState } from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import arrowDownIcon from "../../../assets/images/arrow-down-icon.svg";
import arrowUpIcon from "../../../assets/images/arrow-up-icon.svg";
import {
  CardWrapper,
  DestinationHeader,
  Name,
  ArrowIcon,
  BottomOptions
} from "./styles";

const DestinationCard = ({
  country,
  city,
  startDate,
  endDate,
  hotelAddress,
  numberOfTravellers,
  spendingBudget,
  handleInputChange,
  index,
  onDelete,
  onEdit
}) => {
  let [isOpen, toggleOpenCard] = useState(false);
  return (
    <CardWrapper isOpen={isOpen}>
      {!isOpen ? (
        <DestinationHeader onClick={() => toggleOpenCard(true)}>
          <Name>{`${index + 1} - ${country}`}</Name>
          <ArrowIcon src={arrowDownIcon} />
        </DestinationHeader>
      ) : (
        <React.Fragment>
          <DestinationHeader onClick={() => toggleOpenCard(false)}>
            <Name>{`${index + 1} - ${country}`}</Name>
            <ArrowIcon src={arrowUpIcon} />
          </DestinationHeader>
          <Input
            type="text"
            name="country"
            placeholder="country"
            autocomplete="country"
            value={country}
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="text"
            name="city"
            placeholder="city"
            autocomplete="city"
            value={city}
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="date"
            name="startDate"
            placeholder="start date"
            autocomplete="startDate"
            value={
              startDate.length > 10 ? startDate.substring(0, 10) : startDate
            }
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="date"
            name="endDate"
            placeholder="end date"
            autocomplete="endDate"
            value={endDate.length > 10 ? endDate.substring(0, 10) : endDate}
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="text"
            name="hotelAddress"
            placeholder="hotel address"
            autocomplete="hotelAddress"
            value={hotelAddress}
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="number"
            name="numberOfTravellers"
            placeholder="number of travallers"
            autocomplete="numberOfTravellers"
            value={numberOfTravellers}
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <Input
            type="number"
            name="spendingBudget"
            placeholder="spending budget ($)"
            autocomplete="spendingBudget"
            value={spendingBudget}
            pattern
            handleInputChange={e => handleInputChange(e)}
            error={false}
          />
          <BottomOptions>
            <Button
              type="submit"
              text="update"
              filled={true}
              onClick={e => {
                toggleOpenCard(false);
                onEdit(e);
              }}
              fontSize={13}
            />
            <Button
              type="submit"
              text="delete"
              filled={false}
              onClick={e => onDelete()}
              fontSize={13}
            />
          </BottomOptions>
        </React.Fragment>
      )}
    </CardWrapper>
  );
};

export default DestinationCard;
