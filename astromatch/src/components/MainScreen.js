import { useEffect, useState } from "react";
import styled from "styled-components";
import { DislikeButton } from "./DislikeButton";
import { Header } from "./Header";
import { LikeButton } from "./LikeButton";
import { UserCard } from "./UserCard";
import { MatchList } from "./MatchList";
import axios from "axios";
import { base_URL, headers } from "../services/urls";
// import reactSpring from "react-spring";
import { NoUsersWarning } from "./NoUsersWarning";

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 80%;
  border: 1px solid lightgray;
  box-shadow: 0 4px 8px lightgray;
  border-radius: 15px;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
      padding-bottom: 80px;
      border-radius: 0;
  }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const MainScreen = () => {

    const [matchScreen, setMatchScreen] = useState(false)
    const [profile, setProfile] = useState([])
    const [matches, setMatches] = useState([])
    const [gotMatches,  setGotMatches] = useState(false)

    const getMatches = () => {
        axios.get(base_URL+'matches', headers)
        .then((res) => {
            setMatches(res.data.matches)
            setGotMatches(true)
        })
        .catch((err) => console.log(err.response))
    }

    const getProfile = () => {
        axios.get(base_URL+"person", headers)
        .then((res) => {setProfile(res.data.profile)})
        .catch((err) => {console.log(err.response)})
    }

    useEffect(getMatches, [profile])

    useEffect(() => getProfile(), [])

    const changeScreen = () => {
        setMatchScreen(v => !v)
    }

    const like = () => {
        const data = JSON.stringify({
        "id": profile.id,
        "choice": true
        })

        const config = {
        method: 'post',
        url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rigotto/choose-person',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        }

        axios(config)
        .then(() => getProfile())
        .catch(function (err) {
        console.log(err);
        })
    }

    const dislike = () => {
        const data = JSON.stringify({
            "id": profile.id,
            "choice": false
            })
    
            const config = {
            method: 'post',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rigotto/choose-person',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            }
    
            axios(config)
            .then(() => getProfile())
            .catch(function (err) {
            console.log(err);
            })
    }

    const renderCard = () => {
        if (profile.length !== 0) {
            return <UserCard 
            key={profile.id}
            like={like} 
            photo={profile.photo} 
            name={profile.name} 
            age={profile.age} 
            bio={profile.bio}
            />
        }else return <img style={{width: '450px'}} src="https://flevix.com/wp-content/uploads/2019/07/Line-Preloader.gif" alt="carregando..."/>
               
    }

    let card = (profile !== null ? renderCard() : <NoUsersWarning/>)

    let screen  // renders the main screen

    if (matchScreen) screen = <MatchList matches={matches} gotMatches={gotMatches}/>
    else screen = <>

        {card}

        <ButtonsContainer>

            <DislikeButton dislike={dislike}/>

            <LikeButton like={like}/>

        </ButtonsContainer>
     </>


    return <ScreenContainer>
        <Header matchScreen={matchScreen} changeScreen={changeScreen} getProfile={getProfile} count={matches.length}/>

        {screen}

    </ScreenContainer>
}