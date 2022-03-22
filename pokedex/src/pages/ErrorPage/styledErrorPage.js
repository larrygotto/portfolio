import styled from "styled-components";
import {mainColors} from '../../constants/colors';

export const ContainerError = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 85vh;

h1{
    margin-bottom: 10px;
    color: ${mainColors.red};
}
`