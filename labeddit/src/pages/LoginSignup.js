import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useCheck } from "../hooks/useCheck"
import styled from "styled-components"
import { useState } from "react"
import { ClassicButton } from "../components/ClassicButton"
import { Loading } from "../assets/Loading"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { Logo } from "../assets/Logo"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  h1 {
    margin: 20px 0px;
    display: flex;
    align-items: center;
  }
  .welcome{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 900px) {
    margin: 10% 10%;
    flex-direction: row;
    justify-content: space-between;
    img{
      width: 70%;
    }
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  input {
    margin: 5px;
    font-size: 1em;
    border-radius: 5px;
    border: none;
    padding: 3px;
  }
  p {
    text-align: center;
    button {
      cursor: pointer;
      background-color: #f0dbb0;
      text-decoration: underline;
      border: none;
      font-size: 0.8em;
    }
  }
`

const ModeButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  transition: 500ms ease;
  background-color: ${(props) => props.buttonColor};
`

export const LoginSignup = () => {
  const [mode, setMode] = useState({
    mode: "Login",
    loginButtonColor: "lightsteelblue",
    signupButtonColor: "white",
  })
  const { form, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
  })
  const [buttonText, setButtonText] = useState(mode.mode)
  const navigate = useNavigate()
  const isLoggedIn = useCheck()

  const login = (body, path) => {
    axios
      .post(BASE_URL + "/users/login", body)
      .then((res) => {
        localStorage.setItem("tokenLabeddit", res.data.token)
        navigate("/feed")
      })
      .catch((err) => {
        alert(err.response.data)
        setButtonText("Login")
      })
  }

  const submitLogin = (e) => {
    e.preventDefault()
    setButtonText(<Loading />)
    login(form, () => navigate("/feed"))
  }

  const submitSignUp = (e) => {
    e.preventDefault()
    setButtonText(<Loading />)

    axios
      .post(BASE_URL + "/users/signup", form)
      .then((res) => {
        localStorage.setItem("tokenLabeddit", res.data.token)
        navigate("/feed")
      })
      .catch((err) => {
        alert(err.response.data.message)
        setButtonText("Cadastrar")
      })
  }

  const handleModeLogin = () => {
    setMode({
      mode: "Login",
      loginButtonColor: "lightsteelblue",
      signupButtonColor: "white",
    })
    setButtonText("Login")
  }

  const handleModeSignUp = () => {
    setMode({
      mode: "Cadastrar",
      loginButtonColor: "white",
      signupButtonColor: "lightsteelblue",
    })
    setButtonText("Cadastrar")
  }

  let loginForm = (
    <FormContainer>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        type="submit"
        onSubmit={submitLogin}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          pattern={"[0-9a-zA-Z]{8,}"}
          title="A senha deve possuir no mínimo 8 caracteres"
          required
        />
        <ClassicButton text={buttonText} />
      </form>
      <p>
        Ainda não tem uma conta?{" "}
        <button onClick={handleModeSignUp}>Cadastre-se</button>
      </p>
    </FormContainer>
  )

  let signUpForm = (
    <FormContainer>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        type="submit"
        onSubmit={submitSignUp}
      >
        <input
          name="username"
          type="text"
          placeholder="Nome de Usuário"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          pattern={"[0-9a-zA-Z]{8,}"}
          title="A senha deve possuir no mínimo 8 caracteres"
          required
        />
        <ClassicButton text={buttonText} />
      </form>
      <p>
        Já possui uma conta?{" "}
        <button onClick={handleModeLogin}>Faça login</button>
      </p>
    </FormContainer>
  )

  const renderPage = (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex" }}>
        <ModeButton
          buttonColor={mode.loginButtonColor}
          onClick={handleModeLogin}
        >
          Login
        </ModeButton>

        <ModeButton
          buttonColor={mode.signupButtonColor}
          onClick={handleModeSignUp}
        >
          Cadastro
        </ModeButton>
      </div>

      {mode.mode === "Login" ? loginForm : signUpForm}
    </div>
  )

  return (
    <PageContainer>
      <div className="welcome">
        <h1>
          Boas-vindas ao <Logo />
        </h1>
        <img
          src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg"
          alt="ilustração com pessoas diversas sorrindo"
        />
      </div>

      {isLoggedIn.checked ? navigate("/feed") : renderPage}
    </PageContainer>
  )
}
