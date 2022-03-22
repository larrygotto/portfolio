import styled from "styled-components"
import { BsFillHeartFill } from "react-icons/bs"

const ButtonContainer = styled.button`
    margin: 20px;
    display: flex;
    align-items: center;
    border: 2px solid lightgreen;
    border-radius: 100%;
    padding: 10px;
    background-color: white;
    transition: 300ms ease;
    cursor: pointer;
    .icon{
        font-size: 3em;
        color: coral;
        transition: 300ms ease;
        transform: translateY(8%);
    }
    :hover{
        background-color: lightgreen;
        .icon{
            transform: scale(1.10);
        }
    }
    :active{
        background-color: white;
        .icon{
            transform: scale(1.20);
    }
    }
`

export const LikeButton = (props) => {
    return <ButtonContainer onClick={props.like}>
        <BsFillHeartFill className="icon"/>
    </ButtonContainer>
}