import axios from "axios"
import { useEffect, useState } from "react"
import { PostCard } from "../components/PostCard"
import { BASE_URL } from "../services/urls"
import { Loading } from "../assets/Loading"
import styled from "styled-components"
import { CreatePost } from "../components/CreatePost"
import { useNavigate } from "react-router-dom"
import { ClassicButton } from "../components/ClassicButton"

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding-bottom: 30px;
`

const Ad = styled.div`
  border: 1px solid lightgray;
  height: 700px;
  width: 400px;
  margin-top: 50px;
  background-image: url('https://i.pinimg.com/474x/7b/46/5e/7b465e676c391b80813b3fc391201bdb.jpg');
  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Feed = () => {
  const [posts, setPosts] = useState()
  const [showCreate, setShowCreate] = useState(false)
  const navigate = useNavigate()
  const [size, setSize] = useState(10)
  const [buttonText, setButtonText] = useState("Carregar mais posts")

  const token = localStorage.getItem("tokenLabeddit")

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(BASE_URL + `/posts?size=${size}`, {
          headers: { Authorization: token },
        })
        .then((res) => {
          setPosts(res.data)
        })
        .catch((err) => {
          alert(err.response.data)
          localStorage.removeItem("tokenLabeddit")
          navigate("/login")
        })
    }
    token ? getPosts() : navigate("/login")
  }, [posts, navigate, token, size])

  const createPost = () => {
    setShowCreate(!showCreate)
  }

  const postFeed = posts ? (
    posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          id={post.id}
          username={post.username}
          createdAt={post.createdAt}
          commentCount={post.commentCount}
          title={post.title}
          body={post.body}
          voteSum={post.voteSum}
          userVote={post.userVote}
        />
      )
    })
  ) : (
    <Loading />
  )

  const morePosts = () => {
    setSize(size + 10)
    setButtonText(<Loading showText={"carregando feed..."} />)
    setTimeout(() => {
      setButtonText("Carregar mais posts")
      clearTimeout()
    }, 2000)
  }

  let renderFeed = posts ? (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {postFeed}
      <ClassicButton
        bgColor={"#88a2bc"}
        text={buttonText}
        onClick={morePosts}
      />
    </div>
  ) : (
    <Loading showText={"carregando feed..."} />
  )

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <FeedContainer>
        {showCreate ? (
          <CreatePost clear={createPost} />
        ) : (
          <ClassicButton
            style={{ width: "100%" }}
            text={"Novo post"}
            onClick={createPost}
          />
        )}

        {renderFeed}
      </FeedContainer>
      {posts ? <Ad/> : <></>}
    </div>
  )
}
