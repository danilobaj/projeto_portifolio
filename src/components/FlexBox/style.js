import styled, { css } from "styled-components";

export const FlexBox = styled.div`
  width: ${props => {
    return "props.width";
  }};
  heigth: ${props => {
    return "props.heigth";
  }};
  background: ${props => {
    return "props.background";
  }};
  border: ${(props) => {
    props.border? props.border : '';
  }};
`;

export default FlexBox;
