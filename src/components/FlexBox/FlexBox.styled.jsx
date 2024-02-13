import styled from 'styled-components'


export const FlexBox = styled.div`
  width: ${(props) => {
    props.width1 ? props.width : '';
  }};
  heigth: ${(props) => {
    props.height ? props.height : '';
  }};
  background: ${(props) => {
    props.background ? props.background : 'blue';
  }};
  border: ${(props) => {
    props.border? props.border : '';
  }};
`;
