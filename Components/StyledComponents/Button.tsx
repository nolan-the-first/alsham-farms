import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => (props.textColor == "red" ? "#700111" : "white")};
  background-color: ${(props) =>
    props.bgColor == "red" ? "#700111" : "white"};
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
`;
