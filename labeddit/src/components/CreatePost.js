import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"
import styled from "styled-components"
import { Loading } from "../assets/Loading"
import { useState } from "react"

const FormContainer = styled.div`
  width: 90%;
  margin: 15px;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-shadow: 0 5px 15px gray;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 300ms ease;
  overflow: hidden;
  @keyframes appear {
    from {
      height: 0;
      opacity: 0%;
    }
    to {
      height: 120px;
      opacity: 100%;
    }
  }
  .header {
    margin: 5px 0;
    button {
      cursor: pointer;
      border: 1px solid white;
      padding: 3px;
      border-radius: 5px;
      transition: 300ms ease;
      box-sizing: border-box;
      :hover {
        background-color: white;
        border: 1px solid #4f6a8f;
      }
    }
  }
  input {
    width: 100%;
    font-size: 1em;
    margin: 5px;
    border: 1px solid #4f6a8f;
    border-radius: 10px;
    padding: 3px;
  }
  textarea {
    width: 100%;
    font-size: 1em;
    margin: 5px;
    border: 1px solid #4f6a8f;
    border-radius: 10px;
    padding: 3px;
    resize: none;
  }
  form {
    button {
      margin-left: 15px;
    }
  }
`

export const CreatePost = (props) => {
  const { form, handleChange, clearForm } = useForm({ title: "", body: "" })
  const [buttonText, setButtonText] = useState("Enviar")

  const createPost = (e) => {
    e.preventDefault()

    setButtonText(<Loading size={"1.3em"} />)

    axios
      .post(BASE_URL + "/posts", form, {
        headers: { Authorization: localStorage.getItem("tokenLabeddit") },
      })
      .then((res) => {
        clearForm()
        setButtonText("Enviar")
        props.clear()
      })
      .catch((err) => console.log(err.response.data))
  }

  return (
    <FormContainer>
      <div
        className="header"
        style={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>Novo post</p>
        <button onClick={props.clear}>X</button>
      </div>

      <form
        style={{ display: "flex", alignItems: "center" }}
        type="submit"
        onSubmit={createPost}
      >
        <div>
          <input
            autoFocus
            name="title"
            value={form.title}
            placeholder="Título - máx. 20 caracteres"
            onChange={handleChange}
            pattern={"^[{Z}]*(?:[^{Z}][{Z}]*){0,20}$"}
            title="O título não deve ter mais de 20 caracteres"
            required
          />
          <textarea
            name="body"
            value={form.body}
            placeholder="Mensagem"
            onChange={handleChange}
            required
          />
        </div>
        <ClassicButton text={buttonText} />
      </form>
    </FormContainer>
  )
}
