import styled from "styled-components"
import { FaUserAstronaut } from "react-icons/fa"

const LogoContainter = styled.div`
  margin: 10px;
  font-weight: 700;
  cursor: pointer;
  color: #f26d50;
`

export const Logo = (props) => {
  return (
    <LogoContainter onClick={props.onClick}>
      <FaUserAstronaut /> /labeddit
    </LogoContainter>
  )
}
