import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useForm } from "../hooks/useForm"
import { ClassicButton } from "./ClassicButton"
import styled from "styled-components"
import { Loading } from "../assets/Loading"
import { useState } from "react"

const FormContainer = styled.form`
  background-color: whitesmoke;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  textarea {
    width: 100%;
    border: 1px solid #4f6a8f;
    font-size: 0.9em;
    border-radius: 15px;
    padding: 3px 10px;
    resize: none;
  }
`

export const CreateComment = (props) => {
  const { form, handleChange, clearForm } = useForm({ body: "" })
  const [buttonText, setButtonText] = useState("Enviar")

  const createPost = (e) => {
    e.preventDefault()

    setButtonText(<Loading size={"1.3em"} />)

    axios
      .post(BASE_URL + "/posts/" + props.postId + "/comments", form, {
        headers: { Authorization: localStorage.getItem("tokenLabeddit") },
      })
      .then((res) => {
        clearForm()
        setButtonText("Enviar")
      })
      .catch((err) => console.log(err.response.data))
  }

  return (
    <FormContainer type="submit" onSubmit={createPost}>
      <textarea
        autoFocus
        value={form.body}
        name="body"
        placeholder="Novo comentário"
        onChange={handleChange}
        required
      />
      <ClassicButton text={buttonText} bgColor={"#4f6a8f"} />
    </FormContainer>
  )
}
