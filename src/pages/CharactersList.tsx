import { useState, useEffect } from "react"
import { fetchCharactersList } from "../handlers/functions"
import { Link } from "react-router-dom"
const CharactersList = () => {
  const [CharactersList, setCharactersList] = useState<string[]>([])

  useEffect(() => {
    try {
      fetchCharactersList(setCharactersList)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <ul>
      {
        CharactersList?.map(character =>
          <li>
            <Link to={`${character}`} key={character}>{character}</Link>
          </li>
        )}
    </ul>
  )
}

export default CharactersList