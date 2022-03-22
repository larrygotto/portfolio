import styled from "styled-components"


const ButtonContainer = styled.button`
    cursor: pointer;
    background-color: lightsteelblue;
    margin: 10px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: 600;
    transition: 300ms ease;
    :hover{
        background-color: steelblue;
        color: white
    }
`

export const ButtonClassic = (props) => {
    return <ButtonContainer onClick={props.onClick}>
        {props.text}
    </ButtonContainer>
}