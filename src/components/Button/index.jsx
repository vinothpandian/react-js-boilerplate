import styled from "styled-components";

const Button = styled.button.attrs(props => ({
  background: props.dark ? "black" : "white",
  color: props.dark ? "white" : "black",
  border: props.dark ? "black" : "white"
}))`
  background: ${props => props.background};
  color: ${props => props.color};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  border: 1px solid red;
  box-shadow: none;

  :hover {
    box-shadow: 0px 3px 1px -2px red;
  }

  :focus {
    outline: none;
  }
`;

export default Button;
