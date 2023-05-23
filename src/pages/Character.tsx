import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchCharacterData } from "../handlers/functions"
import { GenshinCharacter } from "../interfaces/characters"

const Character = () => {
  const [characterData, setCharacterData] = useState<GenshinCharacter>()
  const { character } = useParams()

  useEffect(() => {
    fetchCharacterData(`https://genshin-db-api.vercel.app/api/characters?query=${character}&matchAliases=true`, setCharacterData)
  }, [character])

  return (
    <div>
      <img src={characterData?.images.icon} />
    </div>
  )
}

export default Character