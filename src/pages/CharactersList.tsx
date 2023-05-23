import { useState, useEffect } from "react"
import { fetchCharactersList } from "../handlers/fetchData"
import CharacterCard from "../components/CharacterCard"
import styles from './styles/CharacterList.module.css'
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
    <ul className={styles.list}>
      {
        CharactersList?.map(character =>
          // <li className={styles.item}>
          //   <Link to={`${character}`} key={character}>{character}</Link>
          // </li>
          <CharacterCard character={character} key={character}/>
        )}
    </ul>
  )
}

export default CharactersList