import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchCharacterData } from "../handlers/fetchData"
import { GenshinCharacter } from "../interfaces/characters"

const Character = () => {
  const [characterData, setCharacterData] = useState<GenshinCharacter>()
  const { character } = useParams()

  useEffect(() => {
    if (typeof character === 'string') {
      fetchCharacterData(character, setCharacterData)
    }
  }, [character])

  return (
    <div>
      <img src={characterData?.images.icon} />
    </div>
  )
}

export default Character