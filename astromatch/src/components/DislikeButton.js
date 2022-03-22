import styled from "styled-components"
import { BiDislike } from "react-icons/bi"

const ButtonContainer = styled.button`
    margin: 20px;
    display: flex;
    align-items: center;
    border: 2px solid lightcoral;
    border-radius: 100%;
    padding: 10px;
    background-color: white;
    transition: 300ms ease;
    cursor: pointer;
    .icon{
        font-size: 3em;
        transition: 300ms ease;
        color: black;
    }
    :hover{
        background-color: lightcoral;
        .icon{
            transform: translateY(10%);
        }
    }
    :active{
        background-color: white;
        .icon{
            transform: translateY(15%);
        }
    }
`

export const DislikeButton = (props) => {
    return <ButtonContainer onClick={props.dislike}>
        <BiDislike className="icon"/>
    </ButtonContainer>
}