import { FC, useEffect, useState } from "react"
import { GenshinCharacter } from "../interfaces/characters"
import { fetchCharacterData } from "../handlers/fetchData"
import { Link } from "react-router-dom"

type Props = {
  character: string
}

const CharacterCard: FC<Props> = ({character}) => {
  const [characterData, setCharacterData] = useState<GenshinCharacter>()
  console.log(character)

  useEffect(() => {
    fetchCharacterData(character, setCharacterData)
    console.log(characterData)
  }, [])

  return (
    <article>
      <Link to={`${characterData?.name}`}>
        <h3>{characterData?.name}</h3>
      </Link>
      <img src={characterData?.images.icon} />
    </article>
  )
}

export default CharacterCard