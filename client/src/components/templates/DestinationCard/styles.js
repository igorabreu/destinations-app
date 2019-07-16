import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.isOpen ? `40px` : `20px`)};
`;

export const DestinationHeader = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const Name = styled.h5`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.steel};
  font-size: 16px;
  display: inline-block;
  margin: 0px 10px 10px 0px;
  text-transform: uppercase;
`;

export const ArrowIcon = styled.img`
  max-width: 14px;
  transform: translate(0px, -5px);
`;

export const BottomOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 230px;
  justify-content: space-between;
  margin-top: 8px;
`;
