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
`;

export const DestinationCard = styled.div``;
