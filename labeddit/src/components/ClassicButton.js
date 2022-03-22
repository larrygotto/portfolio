import styled from "styled-components"

const StyledButton = styled.button`
  margin: 5px;
  width: fit-content;
  border: none;
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  border-radius: 10px;
  transition: 300ms ease;
  color: white;
  font-weight: 600;
  :hover {
    opacity: 80%;
  }
  :active {
    background-color: ${(props) => props.bgColor};
  }
`

export const ClassicButton = (props) => {
  let bgColor = props.bgColor ? props.bgColor : "orange"

  return (
    <StyledButton bgColor={bgColor} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  )
}
