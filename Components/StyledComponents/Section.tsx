import styled from "styled-components";

export const Section = styled.div`
  padding: ${props => props.padding || "7.1rem 4.75rem"};
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.items || "center"};
`;
