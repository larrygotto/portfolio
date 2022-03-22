import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ButtonClassic } from "../components/ButtonClassic"
import { useForm } from "../hooks/useForm"
import { BASE_URL } from "../services/urls"
import {Logo} from '../assets/Logo.js'
import {Loading} from '../assets/Loading.js'


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: large;
        padding: 0 30px;
        text-align: center;
        margin: 10px;
    }
`

const FormContainer = styled.form`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 15px;
    overflow: hidden;
    input{
        font-size: 1.3em;
    }
`

export const Login = () => {
    const [buttonText, setButtonText] = useState('Login')
    const {form, handleChange, clearForm} = useForm({email: "", password: ""})
    const goTo = useNavigate()

    useEffect(() => localStorage.getItem('token') ? goTo('/admin') : <></>)

    const handleSubmit = (e) => {
        e.preventDefault()

        setButtonText(<Loading/>)

        axios.post(BASE_URL+'/login', form)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goTo('/admin')
        })
        .catch((err) => {
            alert(err.response.data.message)
            clearForm()
            setButtonText('Login')
        })
    }

    return <PageContainer>
        <Logo/>
        <h1>Entre com seu login de administrador</h1>
        <FormContainer type="submit" onSubmit={handleSubmit}>
            <input 
            name="email"
            placeholder="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            />
            <input 
            name="password"
            placeholder="senha"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            pattern={"^.{6,}"}
            title="A senha deve possuir no mínimo 6 caracteres"
            />
            <ButtonClassic text={buttonText}/>
    </FormContainer>
    </PageContainer>
}