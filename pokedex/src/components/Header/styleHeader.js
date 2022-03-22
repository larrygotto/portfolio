import styled from 'styled-components'

export const ContainerHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    .extra-button{
        display: ${props => props.display};
    }
`