import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { AdminTripCard } from "../components/AdminTripCard"
import { useCheck } from "../hooks/useCheck"
import { Loading } from "../assets/Loading"
import { BackButton } from "../assets/BackButton"
import styled from "styled-components"

const TripGrid = styled.div`
    display: flex;
    flex-direction: column;
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

export const TripDetailsList = () => {

    const isLoggedIn = useCheck()

    const [trips, setTrips] = useState()

    useEffect(() => {
        axios.get(BASE_URL+'/trips')
        .then((res) => setTrips(res.data.trips))
    }, [])

    let tripList

    if (trips) {
        tripList = trips.map((trip) => {
            return <AdminTripCard key={trip.id} id={trip.id} title={trip.name} date={trip.date}/>
        })
    }

    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <BackButton/>
        {isLoggedIn.checked ? (trips ? <TripGrid>{tripList}</TripGrid> : <Loading showText={true}/>) : <></>}
    </div>
}