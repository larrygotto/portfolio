import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import {Logo} from "../assets/Logo"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: #3866FF;
    color: white;
`

export const Header = () => {

  const goTo = useNavigate()

  return <Container>
    <div style={{cursor: "pointer"}}><Logo onClick={() => goTo('/')}/></div>

  </Container>
}
