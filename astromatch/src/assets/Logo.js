import styled from "styled-components"

const Container = styled.div`
    cursor: default;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 1.5em;
    .astro{
        color: #4BA397;
        margin: 0;
        padding: 0;
    }
    .match{
        color: #753192;
        margin: 0;
        padding: 0;
    }
`

export const Logo = () => {
    return <Container>
        <p className="astro">astro</p>
        <p className="match">match</p>
    </Container>
}