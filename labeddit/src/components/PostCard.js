import styled from "styled-components"
import { ClassicButton } from "./ClassicButton"
import { AiOutlineComment } from "react-icons/ai"
import {
  BsArrowDownCircle,
  BsArrowDownCircleFill,
  BsArrowUpCircleFill,
  BsArrowUpCircle,
} from "react-icons/bs"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { useState } from "react"
import { Post } from "../pages/Post"
import { FaUserAstronaut } from "react-icons/fa"

const AnimateDiv = styled.div`
  transition: 300ms ease;
  animation: appear 300ms ease;
  overflow: hidden;
  @keyframes appear {
    0% {
      height: 0px;
    }
    100% {
      ${(props) => (props.commentCount ? "height: 130px" : "height: 53px")}
    }
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 7px;
  width: 95%;
  margin: 10px 5px;
  overflow: hidden;
  transition: 500ms ease;
  background-color: white;
  .header {
    padding-top: 3px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.8em;
    font-weight: 600;
    color: gray;
    border-bottom: 1px solid lightgray;
    .title {
      color: black;
      margin: 0 15px;
    }
  }
  .votes {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    margin-top: 15px;
    background-color: whitesmoke;
    padding: 0 10px;
    font-size: 1em;
    font-weight: 600;
    button {
      padding: 5px;
      font-size: 0.9em;
      font-weight: 600;
      .icon {
        font-size: large;
        margin-right: 3px;
      }
    }
  }
  .body {
    margin: 0 15px;
    font-weight: 500;
    word-break: break-all;
    font-size: 1.1em;
  }
`

const StyledIcon = styled.div`
  cursor: pointer;
  margin: 5px;
  transition: 300ms ease;
  border-radius: 50px;
  :active {
    color: white;
    background-color: black;
  }
`

export const PostCard = (props) => {
  const [commenting, setCommenting] = useState(false)

  const clickDetails = () => {
    setCommenting(!commenting)
  }

  const buttonText = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <AiOutlineComment className="icon" />
      <p>
        {props.commentCount ? props.commentCount : 0}{" "}
        {props.commentCount === "1" ? "comentário" : "comentários"}
      </p>
    </div>
  )

  const vote = (direction) => {
    const body = { direction: direction }

    if (props.userVote === direction) {
      axios
        .delete(BASE_URL + "/posts/" + props.id + "/votes", {
          headers: { Authorization: localStorage.getItem("tokenLabeddit") },
        })
        .then()
        .catch((err) => console.log(err.response.data))
    } else {
      axios
        .post(BASE_URL + "/posts/" + props.id + "/votes", body, {
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
    } else if (timeInMinutes >= 120 && timeInMinutes < 1440) {
      return `há ${parseInt(timeInMinutes / 60)} horas`
    } else if (timeInMinutes >= 1440 && timeInMinutes < 2880) return `há 1 dia`
    else return `há ${parseInt(timeInMinutes / 60 / 24)} dias`
  }

  return (
    <CardContainer>
      <div className="header">
        <p className="title">{props.title.substring(0, 20)}</p>
        <p>
          enviado por{" "}
          <u>
            {" "}
            <FaUserAstronaut />
            {props.username}
          </u>{" "}
          {calculateTime()}
        </p>
      </div>

      <p className="body">{props.body}</p>

      <div className="footer">
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

          <ClassicButton
            id={props.id}
            text={buttonText}
            onClick={clickDetails}
          />
        </div>
      </div>

      {commenting ? (
        <AnimateDiv commentCount={props.commentCount}>
          {" "}
          <Post postId={props.id} commentCount={props.commentCount} />{" "}
        </AnimateDiv>
      ) : (
        <></>
      )}
    </CardContainer>
  )
}
