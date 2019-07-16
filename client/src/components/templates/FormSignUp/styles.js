import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeTitle = styled.h1`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.secondaryColor}
  font-size: 28px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const MainLabel = styled.h1`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.color.secondaryColor}
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 5px;
  
`;

export const FormBox = styled.form`
  width: ${props => props.theme.functions.responsive(300, 549)};
  height: 602px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  box-shadow: 0 8px 14px 0 rgba(116, 124, 143, 0.18);
  border: solid 1px ${props => props.theme.color.lightBlueGrey};
`;

export const FormContent = styled.div`
  width: 300px;
  padding-top: 122px;
  margin: auto;
  @media (max-width: 590px) {
    width: 260px;
  }
`;

export const RightContent = styled.div`
  width: 50vw;
  @media (max-width: 895px) {
    width: 60vw;
  }
`;

export const LeftContent = styled.div`
  width: 50vw;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  @media (max-width: 895px) {
    width: 40vw;
  }
`;

export const LowerOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const CancelWrapper = styled.div`
  margin-left: 10px;
`;
