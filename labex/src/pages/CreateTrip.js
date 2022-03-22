import axios from "axios"
import styled from "styled-components"
import { ButtonClassic } from "../components/ButtonClassic"
import { useCheck } from "../hooks/useCheck"
import { useForm } from "../hooks/useForm"
import { BASE_URL } from "../services/urls"
import {BackButton} from '../assets/BackButton.js'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p{
        margin: 20px;
        font-weight: 500;
    }
    input{
        font-size: 1em;
        margin: 5px;
    }
`

const PageContainer = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const CreateTrip = () => {

    const isLoggedIn = useCheck()

    const {form, handleChange, clearForm} = useForm({name: "", planet:"", date: "", description:"", durationInDays: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post(BASE_URL+'/trips', form, {headers: {auth: localStorage.getItem('token')}})
        .then(() => {
            alert('Passeio criado com sucesso')
            clearForm()
        })
        .catch((err) => alert(err.response.data.message))
    }

    const renderForm = () => {
        return <PageContainer>
             <BackButton/>


        <FormContainer type="ínput" onSubmit={handleSubmit}>
               
               <p>Crie uma nova viagem</p>

               <input 
               name="name" 
               type='text'
               value={form.name}
               placeholder="título do passeio" 
               onChange={handleChange}
               required
               />

               <input 
               name="planet" 
               type='text' 
               value={form.planet}
               placeholder="planeta" 
               onChange={handleChange}
               required
               />

               <input 
               name="description" 
               type='text' 
               value={form.description}
               placeholder="descrição" 
               onChange={handleChange}
               required
               />

               <input 
               name="date" 
               type='text' 
               value={form.date}
               placeholder="data de início" 
               onChange={handleChange}
               required
               />

               <input 
               name="durationInDays" 
               type='text' 
               value={form.durationInDays}
               placeholder="duração" 
               onChange={handleChange}
               required
               />

               <ButtonClassic text={'Enviar'}/>

               
       </FormContainer>
        </PageContainer>
    }

    return <div>

        {isLoggedIn.checked ? renderForm() : <></>}

    </div>
}