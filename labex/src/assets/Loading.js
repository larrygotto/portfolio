import styled from "styled-components"
import {AiOutlineLoading} from 'react-icons/ai'

const LoadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon{
        font-size: 3.5em;
        animation: rotation 2s ease 0s infinite;
        margin: 5px;
        @keyframes rotation {
            from {transform: rotate(0)}
            to {transform: rotate(360deg)}
        }
    }
    p{
        font-size: large;
        font-weight: 600;
    }
`

export const Loading = (props) => {

    const text = props.showText

    return <LoadContainer>
        <AiOutlineLoading className="icon"/>
        {text ? <p>Carregando...</p> : <></>}
    </LoadContainer>
}