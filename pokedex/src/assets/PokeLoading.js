import styled from "styled-components"

const Icon = styled.img`
    animation: rotation-loop 1000ms ease infinite;
    width: 30px;
    max-height: 30px;
    @keyframes rotation-loop {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
`

export const PokeLoading = () => {
  return (
    <Icon
      src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
      alt="carregando..."
    />
  )
}
