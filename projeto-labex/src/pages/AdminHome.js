import { useCheck } from "../hooks/useCheck"
import {ButtonClassic} from '../components/ButtonClassic.js'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 85vh;
    .section{
        margin-top: 25vh;
        text-align: center;
        p{
            font-size: 1.2em;
            font-weight: 500;
            margin: 20px;
        }
    }
    .logout{
        align-self: flex-end;
    }
`

export const AdminHome = () => {

    const goTo = useNavigate()

    useCheck()

    const isLoggedIn = useCheck()

    const handleLogout = () => {
        localStorage.clear('input')
        goTo('/login')
    }

    const page = () => {
        return <PageContainer>
             <div className="logout"><ButtonClassic text={'logout'} onClick={handleLogout}/></div>
             <div className="section">

            <p>Boas vindas ao painel administrativo</p>

            <div>            
                <ButtonClassic text="Lista de viagens" onClick={() => goTo('/tripdetailslist')}/>
                <ButtonClassic text="Criar nova viagem" onClick={() => goTo('/createtrip')}/>
            </div>

        </div>
        </PageContainer>
        
    }

    return <div>
        {isLoggedIn.checked ? page() : <></>}
    </div>
}