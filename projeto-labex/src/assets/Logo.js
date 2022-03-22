import styled from "styled-components"
import { GiRocketFlight } from "react-icons/gi"

const LogoContainer = styled.div`
    cursor: default;
    display: flex;
    align-items: baseline;
    .labe{
        font-size: 1.35em;
        font-weight: 400;
    }
    .x{
        font-size: 1.4em;
        font-weight: 450;
    }
    .icon{
        margin-left: -5px;
    }
`

export const Logo = (props) => {
    return <LogoContainer onClick={props.onClick}>
        <p className="labe">Labe</p><p className="x">X</p>
        <GiRocketFlight className="icon"/>
    </LogoContainer>
}