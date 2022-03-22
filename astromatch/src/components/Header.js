import styled from "styled-components"
import { Logo } from "../assets/Logo"
import { RiUserHeartLine, RiUserHeartFill } from "react-icons/ri"
import { BiReset } from "react-icons/bi"
import axios from "axios"
import { base_URL, headers } from "../services/urls"

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height: 40px;
    width: 100%;
    color: #753192;
    .icon{
        margin: 0 15px;
        font-size: 1.5em;
        cursor: pointer;
        transition: 300ms ease;
        :hover{
            transform: scale(1.1);
        }
    }
    .count{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        p{
            color: white;
            margin-right: -15px;
            font-weight: bold;
            background-color: #EE3C49;
            text-align: center;
            border-radius: 20px;
            padding: 0 6px;
        }
    }
`



export const Header = (props) => {

    const clear = () => {
        axios.put(base_URL+'clear', headers)
        .then((res) => {props.getProfile()
            alert('Lista de Matches resetada')
            })
        .catch((err) => console.log(err.response))
    }

    const matchCount = props.count ? <p>{props.count}</p> : <></>

    return <HeaderContainer>
        <BiReset className="icon" onClick={clear}/>
        <Logo/>
        {props.matchScreen ? <RiUserHeartLine className="icon" onClick={props.changeScreen}/> : <div className="count" onClick={props.changeScreen}>{matchCount}<RiUserHeartFill className="icon"/></div> }
    </HeaderContainer>
}