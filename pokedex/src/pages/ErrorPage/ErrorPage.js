import React from "react";
import pikachu from '../../assets/pikachu.gif';
import { ContainerError } from "./styledErrorPage";

const ErrorPage = () => {

    return(
        <ContainerError>
            <h1> Página não encontrada </h1>
            <img className="pikachuTriste" src={pikachu} alt="Pikachu triste"/>
        </ContainerError>
    )
}

export default ErrorPage;