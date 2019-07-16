import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DestinationItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.h5`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.steel};
  font-size: 20px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const OpenIcon = styled.div`
  cursor: pointer;
`;
