import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import {TripCard} from "../components/TripCard"
import { BASE_URL } from "../services/urls"
import { Loading } from "../assets/Loading"
import { BackButton } from "../assets/BackButton"

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    h1{
        padding: 0 20px;
        margin: 0 15px;
        text-align: center;
    }
    h2{
        color: gray;
        margin: 15px;
        text-align: center;
        font-size: 1em;
    }
`
const TripGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        max-width: 1500px;
    }
`

export const TripList = () => {

    const [trips, setTrips] = useState()

    useEffect(() => {
        axios.get(BASE_URL+'/trips')
        .then((res) => setTrips(res.data.trips))
    }, [])

    let renderTrips
    if (trips) {
        renderTrips = trips.map((trip) => {
            return <TripCard
                id={trip.id}
                key={trip.id}
                title={trip.name}
                description={trip.description}
                planet={trip.planet}
                duration={trip.durationInDays}
                date={trip.date}
                />
    })}

    return <ListContainer>
        <BackButton/>
        <h1>Escolha a viagem dos seus sonhos</h1>
        <h2>A LabeX garante sua ida e volta com segurança e drinks all-inclusive</h2>
        <TripGrid>
        {trips ? renderTrips : <Loading showText={true}/>}
        </TripGrid>
    </ListContainer>
}