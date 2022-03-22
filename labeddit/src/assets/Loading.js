import styled from "styled-components"
import { AiOutlineLoading } from "react-icons/ai"

const LoadContainer = styled.div`
  height: 100%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: ${(props) => props.size};
    animation: rotation 2s ease 0s infinite;
    margin: 5px;
    @keyframes rotation {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  p {
    font-size: large;
    font-weight: 600;
  }
`

export const Loading = (props) => {
  return (
    <LoadContainer size={props.size ? props.size : "2em"}>
      <AiOutlineLoading className="icon" />
      {props.showText ? <p>{props.showText}</p> : <></>}
    </LoadContainer>
  )
}
