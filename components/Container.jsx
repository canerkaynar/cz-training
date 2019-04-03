import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.SPACE}px;

  @media (min-width: ${props => props.theme.TABLET}px) {
    padding: ${props => props.theme.SPACE*3}px;
  }

  @media (min-width: ${props => props.theme.LAPTOP}px) {
    margin: ${props => props.theme.SPACE * 6}px ${props => props.theme.SPACE * 12}px;
    padding: 0;
  }
`;

export default Container;

