import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../services/urls"
import { CommentCard } from "../components/CommentCard"
import { Loading } from "../assets/Loading"
import { CreateComment } from "../components/CreateComment"

export const Post = (props) => {
  const postId = props.postId
  const navigate = useNavigate()

  const token = localStorage.getItem("tokenLabeddit")

  const [postComments, setPostComments] = useState(null)


  useEffect(() => {
    const getPostComments = () => {
      axios
        .get(BASE_URL + `/posts/${postId}/comments`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setPostComments(res.data)
        })
        .catch((err) => {
          alert(err.response.data)
          localStorage.removeItem("tokenLabeddit")
          navigate("/login")
        })
    }

    token ? getPostComments() : navigate("/login")
  }, [postComments, navigate, token, postId])

  const commentsList = postComments ? (
    postComments.map((comment) => {
      return (
        <CommentCard
          key={comment.id}
          id={comment.id}
          username={comment.username}
          createdAt={comment.createdAt}
          title={comment.title}
          body={comment.body}
          voteSum={comment.voteSum}
          userVote={comment.userVote}
        />
      )
    })
  ) : props.commentCount ? (
    <Loading showText={"carregando comentários..."} />
  ) : (
    <></>
  )

  return (
    <div>
      <CreateComment postId={postId} />
      {commentsList}
    </div>
  )
}
