const DetailPage = () => {

    const pokemons = {
        moves: [
            {
                move: {
                    name: "swords-dance",
                    url: "https://pokeapi.co/api/v2/move/14/"
                }
            },
            {
                move: {
                    name: "cut",
                    url: "https://pokeapi.co/api/v2/move/15/"
                }
            },
            {
                move: {
                    name: "bind",
                    url: "https://pokeapi.co/api/v2/move/20/"
                }
            },
            {
                move: {
                    name: "vine-whip",
                    url: "https://pokeapi.co/api/v2/move/22/"
                }
            },
            {
                move: {
                    name: "headbutt",
                    url: "https://pokeapi.co/api/v2/move/29/"
                }
            },
            {
                move: {
                    name: "tackle",
                    url: "https://pokeapi.co/api/v2/move/33/"
                }
            },
            {
                move: {
                    name: "body-slam",
                    url: "https://pokeapi.co/api/v2/move/34/"
                }
            },
            {
                move: {
                    name: "take-down",
                    url: "https://pokeapi.co/api/v2/move/36/"
                }
            },
            {
                move: {
                    name: "double-edge",
                    url: "https://pokeapi.co/api/v2/move/38/"
                }
            },
            {
                move: {
                    name: "growl",
                    url: "https://pokeapi.co/api/v2/move/45/"
                }
            },
            {
                move: {
                    name: "strength",
                    url: "https://pokeapi.co/api/v2/move/70/"
                }
            },
            {
                move: {
                    name: "mega-drain",
                    url: "https://pokeapi.co/api/v2/move/72/"
                }
            },
            {
                move: {
                    name: "leech-seed",
                    url: "https://pokeapi.co/api/v2/move/73/"
                }
            },
            {
                move: {
                    name: "growth",
                    url: "https://pokeapi.co/api/v2/move/74/"
                }
            },
            {
                move: {
                    name: "razor-leaf",
                    url: "https://pokeapi.co/api/v2/move/75/"
                }
            },
            {
                move: {
                    name: "solar-beam",
                    url: "https://pokeapi.co/api/v2/move/76/"
                }
            },
            {
                move: {
                    name: "poison-powder",
                    url: "https://pokeapi.co/api/v2/move/77/"
                }
            },
            {
                move: {
                    name: "sleep-powder",
                    url: "https://pokeapi.co/api/v2/move/79/"
                }
            },
            {
                move: {
                    name: "string-shot",
                    url: "https://pokeapi.co/api/v2/move/81/"
                }
            },
            {
                move: {
                    name: "toxic",
                    url: "https://pokeapi.co/api/v2/move/92/"
                }
            },
            {
                move: {
                    name: "rage",
                    url: "https://pokeapi.co/api/v2/move/99/"
                }
            },
            {
                move: {
                    name: "mimic",
                    url: "https://pokeapi.co/api/v2/move/102/"
                }
            },
            {
                move: {
                    name: "double-team",
                    url: "https://pokeapi.co/api/v2/move/104/"
                }
            },
            {
                move: {
                    name: "defense-curl",
                    url: "https://pokeapi.co/api/v2/move/111/"
                }
            },
            {
                move: {
                    name: "light-screen",
                    url: "https://pokeapi.co/api/v2/move/113/"
                }
            },
            {
                move: {
                    name: "reflect",
                    url: "https://pokeapi.co/api/v2/move/115/"
                }
            },
            {
                move: {
                    name: "bide",
                    url: "https://pokeapi.co/api/v2/move/117/"
                }
            },
            {
                move: {
                    name: "flash",
                    url: "https://pokeapi.co/api/v2/move/148/"
                }
            },
            {
                move: {
                    name: "rest",
                    url: "https://pokeapi.co/api/v2/move/156/"
                }
            },
            {
                move: {
                    name: "substitute",
                    url: "https://pokeapi.co/api/v2/move/164/"
                }
            },
            {
                move: {
                    name: "snore",
                    url: "https://pokeapi.co/api/v2/move/173/"
                }
            },
            {
                move: {
                    name: "curse",
                    url: "https://pokeapi.co/api/v2/move/174/"
                }
            },
            {
                move: {
                    name: "protect",
                    url: "https://pokeapi.co/api/v2/move/182/"
                }
            },
            {
                move: {
                    name: "sludge-bomb",
                    url: "https://pokeapi.co/api/v2/move/188/"
                }
            },
            {
                move: {
                    name: "mud-slap",
                    url: "https://pokeapi.co/api/v2/move/189/"
                }
            },
            {
                move: {
                    name: "giga-drain",
                    url: "https://pokeapi.co/api/v2/move/202/"
                }
            },
            {
                move: {
                    name: "endure",
                    url: "https://pokeapi.co/api/v2/move/203/"
                }
            },
            {
                move: {
                    name: "swagger",
                    url: "https://pokeapi.co/api/v2/move/207/"
                }
            },
            {
                move: {
                    name: "fury-cutter",
                    url: "https://pokeapi.co/api/v2/move/210/"
                }
            },
            {
                move: {
                    name: "attract",
                    url: "https://pokeapi.co/api/v2/move/213/"
                }
            },
            {
                move: {
                    name: "sleep-talk",
                    url: "https://pokeapi.co/api/v2/move/214/"
                }
            },
            {
                move: {
                    name: "return",
                    url: "https://pokeapi.co/api/v2/move/216/"
                }
            },
            {
                move: {
                    name: "frustration",
                    url: "https://pokeapi.co/api/v2/move/218/"
                }
            },
            {
                move: {
                    name: "safeguard",
                    url: "https://pokeapi.co/api/v2/move/219/"
                }
            },
            {
                move: {
                    name: "sweet-scent",
                    url: "https://pokeapi.co/api/v2/move/230/"
                }
            },
            {
                move: {
                    name: "synthesis",
                    url: "https://pokeapi.co/api/v2/move/235/"
                }
            },
            {
                move: {
                    name: "hidden-power",
                    url: "https://pokeapi.co/api/v2/move/237/"
                }
            },
            {
                move: {
                    name: "sunny-day",
                    url: "https://pokeapi.co/api/v2/move/241/"
                }
            },
            {
                move: {
                    name: "rock-smash",
                    url: "https://pokeapi.co/api/v2/move/249/"
                }
            },
            {
                move: {
                    name: "facade",
                    url: "https://pokeapi.co/api/v2/move/263/"
                }
            },
            {
                move: {
                    name: "nature-power",
                    url: "https://pokeapi.co/api/v2/move/267/"
                }
            },
            {
                move: {
                    name: "knock-off",
                    url: "https://pokeapi.co/api/v2/move/282/"
                }
            },
            {
                move: {
                    name: "secret-power",
                    url: "https://pokeapi.co/api/v2/move/290/"
                }
            },
            {
                move: {
                    name: "bullet-seed",
                    url: "https://pokeapi.co/api/v2/move/331/"
                }
            },
            {
                move: {
                    name: "natural-gift",
                    url: "https://pokeapi.co/api/v2/move/363/"
                }
            },
            {
                move: {
                    name: "worry-seed",
                    url: "https://pokeapi.co/api/v2/move/388/"
                }
            },
            {
                move: {
                    name: "seed-bomb",
                    url: "https://pokeapi.co/api/v2/move/402/"
                }
            },
            {
                move: {
                    name: "energy-ball",
                    url: "https://pokeapi.co/api/v2/move/412/"
                }
            },
            {
                move: {
                    name: "captivate",
                    url: "https://pokeapi.co/api/v2/move/445/"
                }
            },
            {
                move: {
                    name: "grass-knot",
                    url: "https://pokeapi.co/api/v2/move/447/"
                }
            },
            {
                move: {
                    name: "venoshock",
                    url: "https://pokeapi.co/api/v2/move/474/"
                }
            },
            {
                move: {
                    name: "round",
                    url: "https://pokeapi.co/api/v2/move/496/"
                }
            },
            {
                move: {
                    name: "echoed-voice",
                    url: "https://pokeapi.co/api/v2/move/497/"
                }
            },
            {
                move: {
                    name: "grass-pledge",
                    url: "https://pokeapi.co/api/v2/move/520/"
                }
            },
            {
                move: {
                    name: "work-up",
                    url: "https://pokeapi.co/api/v2/move/526/"
                }
            },
            {
                move: {
                    name: "confide",
                    url: "https://pokeapi.co/api/v2/move/590/"
                }
            }
        ],
        name: "ivysaur",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            front_defaut: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        },
        stats: [
            {
                base_stat: 60,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                base_stat: 62,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                base_stat: 63,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                base_stat: 80,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                base_stat: 80,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                base_stat: 60,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        types: [
            {
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    }



    const powers = pokemons.stats
    const types = pokemons.types
    const attacks = []

    console.log(attacks)

    for (let i = 0; i < 5; i++){
        attacks.push(pokemons.moves[i])
    }

    const CardPower = powers&&powers.map((power) => {
        return (
        <div key={power.stat.name}>
            <bold>{power.stat.name}:</bold>
            {power.base_stat}

        </div>
        )
    })

    const CardTypes = types&&types.map((type) => {
        return(
            <>
                <p>{type.type.name}</p>
            </>
        )
    })

    const CardAttacks = attacks&&attacks.map((attack) => {
        return(
            <p>{attack.move.name}</p>
        )
    })


    return (
        <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Imagem do pokemon de frente" />
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png" alt="Imagem do pokemon de costas" />

            <div>
                <h2>Poderes:</h2>
                {CardPower}
            </div>

            <div>
                <h2>Tipos:</h2>
                {CardTypes}
            </div>

            <div>
                <h2>Principais ataques:</h2>
                {CardAttacks}
            </div>


        </div>
    )
}

export default DetailPage