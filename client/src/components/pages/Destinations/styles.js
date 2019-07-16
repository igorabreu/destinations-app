import styled from "styled-components";

export const DestinationsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.primaryColor};
  font-size: 28px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const DestinationList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 30px;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
`;

export const IconPlus = styled.img``;

export const AddNew = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.primaryColor};
  font-size: 13px;
  text-transform: uppercase;
  width: 90px;
  transform: translate(0px, 5px);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
