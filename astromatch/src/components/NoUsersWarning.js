import styled from "styled-components";

const StyledP = styled.p`
    margin: 10px 0;
    padding: 0;
    font-size: 1em;
    color: black;
    text-align: center;
    font-weight: 500;
    cursor: default;
`

export const NoUsersWarning = () => {
    return <div>
        <img style={{width: '250px'}} src="https://media2.giphy.com/media/JGUMPPTMRCVPbSncVF/giphy.gif" alt="gif de radar"/>
        <StyledP>Não há mais usuários por perto.</StyledP>
        <StyledP>Resete para começar de novo.</StyledP>
    </div>
}