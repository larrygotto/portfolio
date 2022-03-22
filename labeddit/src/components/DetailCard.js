import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ClassicButton } from "./ClassicButton"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 15px;
  width: 90vw;
  margin: 10px 0;
  padding: 0 10px;
  .user {
    align-self: center;
    margin: 10px 0;
  }
`

export const DetailCard = (props) => {
  return (
    <CardContainer>
      <p className="user">User: {props.username}</p>
      <p className="date">Created at: {props.createdAt}</p>
      <p className="title">Title: {props.title}</p>
      <p className="body">Body: {props.body}</p>
      <p className="votes">Votos: {props.voteSum ? props.voteSum : 0}</p>
      <p className="comments">
        Comentários {props.commentCount ? props.commentCount : 0}
      </p>
      {props.userVote ? <p>Votou</p> : <p>Não votou</p>}
    </CardContainer>
  )
}
