import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import {
  PokeContainer,
  PageContainer,
  StatsContainer,
  DetailsContainer,
  TypesContainer,
  MovesContainer,
  Type,
  DetailsHeader,
} from "./StyledDetailsPage"
import usePokemonType from "../../hooks/usePokemonType"
import { typeDetails } from "../../constants/typeDetails"
import pikachusillouette from "../../assets/pikachusillouette.png"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ColorizeOutlinedIcon from "@mui/icons-material/ColorizeOutlined"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined"
import BoxError from "../../components/BoxError";
import { useChangePage } from "../../hooks/useChangePage";
import { Loading } from "../../components/Loading/Loading"

const DetailsPage = () => {
  useChangePage();
  const params = useParams()
  const [details, error, loading] = useRequestData(`${BASE_URL}${params.name}`)

  const stats = details?.stats
  const types = details?.types
  const moves = details?.moves
  const indice = details?.id

  let pokemonPhoto
  if (details && details.sprites.other.home.front_default) {
    pokemonPhoto = details.sprites.other.home.front_default
  } else if (details && details.sprites.front_default) {
    pokemonPhoto = details.sprites.front_default
  } else if (details && details.sprites.front_shiny) {
    pokemonPhoto = details.sprites.front_shiny
  } else pokemonPhoto = pikachusillouette

  const renderMoves = moves?.map((move, i) => {
    return i < 5 && <p key={i}>{move.move.name}</p>
  })

  const type1 = usePokemonType(types ? types[0].type.name : "")
  let type2
  if (types && types.length > 1)
    type2 = typeDetails
      .filter((type) => {
        return types[1].type.name === type.type
      })
      .map((type) => {
        return type
      })

  const renderPage = details && (
    <PageContainer>
      <PokeContainer
        bgColor1={type1.color}
        bgColor2={type2 ? type2[0].color : "white"}
      >
        <DetailsHeader>
          <TypesContainer>
            <Type typeColor={type1.color}>
              {type1.text}
            </Type>
            {type2 ? (
              <Type typeColor={type2[0].color}>
                {type2[0].text}
              </Type>
            ) : (
              <></>
            )}
          </TypesContainer>
          <p className="index">#{indice}</p>
        </DetailsHeader>
        <img src={pokemonPhoto} alt={`${params.id}`} />
        <DetailsContainer>
          <StatsContainer>
            <h3>Status</h3>
            <div className="statsContainer">
              <div>
                <p>
                  <FavoriteBorderIcon />
                  <b>HP:</b> {stats[0].base_stat}
                </p>
                <p>
                  <ColorizeOutlinedIcon className="sword"/>
                  <b>Ataque:</b> {stats[1].base_stat}
                </p>
                <p>
                  <ShieldOutlinedIcon />
                  <b>Defesa:</b> {stats[2].base_stat}
                </p>
              </div>
              <div>
                <p>
                  <AutoFixHighOutlinedIcon />
                  <b>Ataque-Especial:</b> {stats[3].base_stat}
                </p>
                <p>
                  <SecurityOutlinedIcon />
                  <b>Defesa-Especial:</b> {stats[4].base_stat}
                </p>
                <p>
                  <DirectionsRunOutlinedIcon />
                  <b>Velocidade:</b> {stats[5].base_stat}
                </p>
              </div>
            </div>
          </StatsContainer>
          <MovesContainer>
            <h3>Principais Habilidades</h3>
            {renderMoves}
          </MovesContainer>
        </DetailsContainer>
      </PokeContainer>
    </PageContainer>
  )

  return (<>
    {loading && <Loading />}
    {!loading && renderPage}
    <BoxError error={error} />
  </>)
}

export default DetailsPage
