import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonClassic } from "./ButtonClassic"

const CardContainer = styled.div`
    padding: 10px;
    margin: 15px 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-radius: 15px;
    height: fit-content;
    overflow: hidden;
    box-shadow: 0 2px 4px lightgray;
    .title{
        font-weight: 600;
    }
`

export const AdminTripCard = (props) => {

    const goTo = useNavigate()

    const handleClick = () => {
        goTo('/tripdetail/'+props.id)
    }

    return <CardContainer>
            <p className="title">{props.title}</p>
            <p>Data: {props.date}</p>
            <ButtonClassic text='Ver detalhes' onClick={handleClick}/>
    </CardContainer>
}