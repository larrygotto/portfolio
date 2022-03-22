import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonClassic } from "../components/ButtonClassic"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1500px;
`

const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        height: 30vh;
        animation: float 4s ease 0s infinite;
        @keyframes float {
            0% {transform: rotate(0) rotateX(0);}
            25% {transform: rotate(5deg) rotateX(3deg);}
            50% {transform: rotate(2deg) rotateX(5deg);}
            75% {transform: rotate(4deg) rotateX(8deg);}
            100% {transform: rotate(0) rotateX(0);}
        }
    }
    h1{
        margin: 15px;
    }
    h2{
        color: gray;
        margin-bottom: 15px;
        padding: 0 20px;
        text-align: center;
    }
    h3{
        text-align: center;
        padding: 0 25px;
        margin-bottom: 15px;
    }
`

export const HomePage = () => {

    const goTo = useNavigate()

    return <PageContainer>

        <FirstSection>
            
            <img src="https://i.pinimg.com/originals/e1/74/b3/e174b3c986582a60ce3977fee1119834.png" alt="Foguete voando"/>
            <h1>Ao Infinito e Além</h1>
            <h2>Viajar pelo espaço nunca foi tão fácil.</h2>
            <h3>Na LabeX você vai conhecer a vida, o universo e tudo mais. <br/> Só não esqueça sua toalha!</h3>
            <ButtonClassic text={"Encontrar Viagem"} onClick={() => goTo('/trips')}/>
        
        </FirstSection>

    </PageContainer>
}