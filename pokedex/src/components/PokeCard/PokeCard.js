import { useContext } from "react"
import { Button } from "@mui/material"
import { CardContainer, CardFooter, TypeContainer } from "./styledPokeCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/BASE_URL"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { Link } from "react-router-dom"
import usePokemonType from "../../hooks/usePokemonType"
import { pageData } from "../../constants/pageData"
import pikachusillouette from '../../assets/pikachusillouette.png'
import { typeDetails } from "../../constants/typeDetails"

export default function PokeCard(props) {
  const { states, setters } = useContext(GlobalStateContext);
  const { page, pokedex } = states;
  const { setPokedex } = setters;

  const capitalizeFirst = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  //Início do código adicionado por Diego
  const pokemonName = props.pokemonName
  const pokemonData = useRequestData(`${BASE_URL}${pokemonName}`)[0];
  const pokemonType = pokemonData && pokemonData.types;
  let pokemonPhoto
  if (pokemonData && pokemonData.sprites.other.home.front_default){
    pokemonPhoto = pokemonData.sprites.other.home.front_default
  } else if (pokemonData && pokemonData.sprites.front_default){
    pokemonPhoto = pokemonData.sprites.front_default
  } else if (pokemonData && pokemonData.sprites.front_shiny){
    pokemonPhoto = pokemonData.sprites.front_shiny
  } else pokemonPhoto = pikachusillouette
  //Fim do código adicionado por Diego

  const indice = pokemonData?.id

  const isOnPokedex = () => {
    // checa se o pokemon está na pokedex e retorna um boolean
    if (page === 'home'){
      return pokedex.includes(pokemonName)
    } else{
      return false
    }
  }

  const addOrRemove = () => {
    //Adiciona ou Remove pokémons da pokédex
    const newPokedex = [...pokedex]
    if (page === 'home'){
      newPokedex.push(pokemonName)
    } else if(page === 'pokedex'){
      const index = pokedex.findIndex((item) => {
        return item === pokemonName;
      });
      newPokedex.splice(index, 1)
    }
    setPokedex(newPokedex)
    localStorage.setItem('pokedex', JSON.stringify(newPokedex))
  }

  const type = usePokemonType(pokemonType ? pokemonType[0].type.name : "")
  let type2
  if (pokemonType && pokemonType.length > 1)
    type2 = typeDetails
      .filter((type) => {
        return pokemonType[1].type.name === type.type
      })
      .map((type) => {
        return type
      })


  return (
    <CardContainer bgColor={type.color}>
      <img src={pokemonPhoto} alt="pokemon" />
      <p>{indice}. {capitalizeFirst(pokemonName)}</p>
      <TypeContainer>
      <p className="type">{type.text}</p>
      {type2 ? <p className="type">{type2[0].text}</p> : <></>}
      </TypeContainer>
      <CardFooter>
        <Button
          color="primary"
          variant="contained"
          disabled={isOnPokedex()}
          size="medium"
          onClick={addOrRemove}
        >
          {pageData[page].buttonCard}
        </Button>
        <Link to={`/detalhes/${pokemonName}`}>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
          >
            detalhes
          </Button>
        </Link>
      </CardFooter>
    </CardContainer>
  )
}
