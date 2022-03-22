import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { ButtonClassic } from "../components/ButtonClassic"
import {AiOutlineCheckCircle} from "react-icons/ai"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    text-align: center;
    p{
        font-size: 1.3em;
        margin: 10px 0;
    }
    .icon{
        font-size: 4em;
        color: green;
        margin: 20px;
    }
`

export const ApplicationSuccess = () => {

    const goTo = useNavigate()
    const params = useParams()
    const tripName = params.tripname

    return <PageContainer>
        <AiOutlineCheckCircle className="icon"/>
        <p>Parabéns! Sua inscrição para o passeio <b>{tripName}</b> foi um sucesso!</p>
        <p>Confira sua caixa de emails para mais detalhes.</p>
        <ButtonClassic text={'Voltar à lista de viagens'} onClick={() => goTo('/trips')}/>
    </PageContainer>
}