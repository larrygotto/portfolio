import { useEffect, useContext } from "react";
import { GlobalStateContext } from "../Global/GlobalStateContext";
import { pageType } from '../constants/pageData';
import { useParams, useNavigate } from "react-router-dom"

export const useChangePage = () => {
    const { setters} = useContext(GlobalStateContext)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const path = pageType(window.location.pathname.substr(1))
        setters.setPage(path)
        localStorage.setItem('page', path)
        const pokemon = params.name || ''
        setters.setPokemon(pokemon.charAt(0).toUpperCase() + pokemon.slice(1))
      }, [navigate])
}