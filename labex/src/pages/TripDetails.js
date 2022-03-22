import { useCheck } from "../hooks/useCheck"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { Loading } from "../assets/Loading"
import { BackButton } from "../assets/BackButton"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    width: 80%;
    border-radius: 20px;
    margin: 10px 0;
    margin-top: 30px;
    padding: 10px;
    button{
        cursor: pointer;
        font-size: 1em;
        align-self: flex-end;
        color: white;
        background-color: coral;
        border: none;
        padding: 5px;
        border-radius: 15px;
        transition: 300ms ease;
        :hover{
            background-color: red;
        }
    }
    .approve{
        background-color: seagreen;
        :hover{
            background-color: lightseagreen;
        }
    }
    p{
        color: gray;
        font-size: 1em;
    }
    .title{
        color: black;
        font-size: 1.2em;
        font-weight: 500;
        margin-bottom: 5px;
    }
`

const PageContainer = styled.div`
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .sub{
        font-weight: 500;
        margin: 10px 0 0 0;
    }
`


export const TripDetails = () => {

    const [trip, setTrip] = useState()

    const isLoggedIn = useCheck()

    const goTo = useNavigate()

    const params = useParams()
    const tripId = params.id

    useEffect(() => {
        axios.get(BASE_URL+'/trip/'+tripId, {headers: {auth: localStorage.getItem('token')}})
        .then((res) => setTrip(res.data.trip))
        .catch((err) => alert(err.response.data))
    }, [tripId, trip])

    const deleteTrip = () =>{
        if (window.confirm('Você deseja apagar essa viagem?')){
            axios.delete(BASE_URL+'/trips/'+tripId, {headers: {auth: localStorage.getItem('token')}})
            .then((res) => {
                (res.data.success ? alert('Viagem apagada com sucesso!') : alert('Algo deu errado, tente novamente'))
                goTo(-1)
            })
            .catch((err) => alert(err.response.data))
        }
    }

    const approveCandidate = (e) => {
        const candidateID = e.target.id
        axios.put(BASE_URL+'/trips/'+tripId+'/candidates/'+candidateID+'/decide', {approve: true}, {headers: {auth: localStorage.getItem('token')}})
        .then((res) => alert('Candidato Aprovado'))
        .catch((err) => console.log(err.response.data))
    }

    const disapproveCandidate = (e) => {
        const candidateID = e.target.id
        axios.put(BASE_URL+'/trips/'+tripId+'/candidates/'+candidateID+'/decide', {approve: false}, {headers: {auth: localStorage.getItem('token')}})
        .then((res) => alert('Candidatura negada'))
        .catch((err) => console.log(err.response.data))
    }

    let candidates

    if (trip){
        candidates = trip.candidates.map((candidate) => {
            return <Card key={candidate.id}>
                <p className="title">{candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>País: {candidate.country}</p>
                <p>Mensagem de candidatura: {candidate.applicationText}</p>
                <div style={{margin: '10px', display: "flex", justifyContent: "space-around"}}>
                    <button className='approve' id={candidate.id} onClick={approveCandidate}>Aprovar</button>
                    <button id={candidate.id} onClick={disapproveCandidate}>Negar</button>
                </div>
            </Card>
        })
    }

    return <PageContainer>
        <BackButton/>
        {isLoggedIn.checked ? (trip ? (<PageContainer>
            <Card>
                <p className="title">{trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Data: {trip.date}</p>
                <p>Duração: {trip.durationInDays}</p>
                <button onClick={deleteTrip}>Apagar viagem</button>
            </Card>
            
            {trip.candidates.length === 1 ? <p className="sub">1 Pessoa Inscrita</p> : <p className="sub">{trip.candidates.length} Pessoas Inscritas</p>}
            {candidates}
        </PageContainer>): <Loading showText={true}/>) : <></>}

    </PageContainer>
}