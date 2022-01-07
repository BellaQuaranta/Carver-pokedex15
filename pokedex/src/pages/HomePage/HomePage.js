import React from "react"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../context/GlobalContext/GlobalStateContext"
import { goToDetailPage } from "../../routes/coordinator"
import HomePageContainer from "./styled"
import CardPokemon from "../../components/CardPokemon/CardPokemon"


const HomePage = () => {
    const history = useHistory()
    const detalhesPokemons = useContext(GlobalStateContext)
    console.log(detalhesPokemons)

    const CardInfoPokemon = detalhesPokemons && detalhesPokemons.map((pokemon) => {
        return(
        <CardPokemon name={pokemon.name} photo={pokemon.sprites.front_default}/> 
        )
       
    })

    return (
        <HomePageContainer>
        {CardInfoPokemon}
        </HomePageContainer>

    )
}
export default HomePage