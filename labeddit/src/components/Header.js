import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Logo } from "../assets/Logo"
import { ClassicButton } from "./ClassicButton"

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  box-shadow: 0 0px 10px gray;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  color: #4f6a8f;
  button {
    margin: 5px 10px;
  }
`

export const Header = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("tokenLabeddit")

  let headerButton = token ? (
    <ClassicButton
      text={"Logout"}
      bgColor={"#88a2bc"}
      onClick={() => {
        localStorage.removeItem("tokenLabeddit")
        navigate("/login")
      }}
    />
  ) : (
    <ClassicButton text={"Login"} onClick={() => navigate("/login")} />
  )

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate("/")} />
      {headerButton}
    </HeaderContainer>
  )
}
