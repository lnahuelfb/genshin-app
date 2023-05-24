import { useState, useEffect } from "react"
import { fetchCharactersList } from "../handlers/fetchData"
import CharacterCard from "../components/CharacterCard"
import styles from './styles/CharacterList.module.css'
const CharactersList = () => {
  const [CharactersList, setCharactersList] = useState<string[]>([])

  useEffect(() => {
    fetchCharactersList(setCharactersList)
  }, [])

  return (
    <ul className={styles.list}>
      {
        CharactersList?.map(character =>
          <CharacterCard character={character} key={character} />
        )}
    </ul>
  )
}

export default CharactersList