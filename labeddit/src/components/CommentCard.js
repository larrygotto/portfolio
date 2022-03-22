import styled from "styled-components"
import {
  BsArrowDownCircle,
  BsArrowDownCircleFill,
  BsArrowUpCircleFill,
  BsArrowUpCircle,
} from "react-icons/bs"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { FaUserCircle } from "react-icons/fa"

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  transition: 500ms ease;
  background-color: whitesmoke;
  .header {
    background-color: white;
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
    p {
      margin-left: 5px;
      color: black;
      font-size: 1em;
    }
    .time {
      font-size: 0.7em;
      color: gray;
    }
  }
  .comment {
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0;
  }
  .votes {
    display: flex;
    align-items: center;
    p {
      font-weight: 500;
    }
  }
  .body {
    font-weight: 500;
    font-size: 1em;
    word-break: break-all;
  }
`

const StyledIcon = styled.div`
  cursor: pointer;
  margin: 0 5px;
  transition: 300ms ease;
  border-radius: 50px;
  :active {
    color: white;
    background-color: black;
  }
`

export const CommentCard = (props) => {
  const vote = (direction) => {
    const body = { direction: direction }

    if (props.userVote === direction) {
      axios
        .delete(BASE_URL + "/comments/" + props.id + "/votes", {
          headers: { Authorization: localStorage.getItem("tokenLabeddit") },
        })
        .then()
        .catch((err) => console.log(err.response.data))
    } else {
      axios
        .post(BASE_URL + "/comments/" + props.id + "/votes", body, {
          headers: { Authorization: localStorage.getItem("tokenLabeddit") },
        })
        .then()
        .catch((err) => console.log(err.response.data))
    }
  }

  let today = new Date()

  const calculateTime = () => {
    const postTime = new Date(props.createdAt)
    const timeInMinutes = parseInt((today - postTime) / 1000 / 60)
    if (timeInMinutes === 0) return `agora`
    else if (timeInMinutes === 1) return `há 1 minuto`
    else if (timeInMinutes < 60) {
      return `há ${timeInMinutes} minutos`
    } else if (timeInMinutes >= 60 && timeInMinutes < 120) {
      return `há 1 hora`
    } else if (timeInMinutes >= 120 && timeInMinutes < 2280) {
      return `há ${parseInt(timeInMinutes / 60)} horas`
    } else if (timeInMinutes >= 1440 && timeInMinutes < 2880) return `há 1 dia`
    else return `há ${parseInt(timeInMinutes / 60 / 24)} dias`
  }

  return (
    <CommentContainer>
      <div className="header">
        <FaUserCircle />
        <p>{props.username}</p>
        <p className="time">- {calculateTime()}</p>
      </div>

      <div className="comment">
        <div className="votes">
          <StyledIcon onClick={() => vote(1)}>
            {props.userVote === 1 ? (
              <BsArrowUpCircleFill />
            ) : (
              <BsArrowUpCircle />
            )}
          </StyledIcon>
          <p>{props.voteSum ? props.voteSum : 0}</p>
          <StyledIcon onClick={() => vote(-1)}>
            {props.userVote === -1 ? (
              <BsArrowDownCircleFill />
            ) : (
              <BsArrowDownCircle />
            )}
          </StyledIcon>
        </div>
        <p className="body">{props.body}</p>
      </div>
    </CommentContainer>
  )
}
