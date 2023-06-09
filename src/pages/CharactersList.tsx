import { useState, useEffect } from "react"
import { fetchCharactersList } from "@handlers/fetchData"
import CharacterCard from "@components/CharacterCard"
import styles from './styles/CharacterList.module.css'
const CharactersList = () => {
  const [CharactersList, setCharactersList] = useState<string[]>([])

  useEffect(() => {
    fetchCharactersList(setCharactersList)
  }, [])

  window.localStorage.setItem('filter', 'cryo')
  
  console.log(localStorage)

  return (
    <>
      <h2>filter</h2>
      <select name="" id="" >
        <option value="electro">Electro</option>
        <option value="cryo">Cryo</option>
        <option value="anemo">Anemo</option>
        <option value="dendro">Dendro</option>
        <option value="geo">Geo</option>
        <option value="hydro">Hydro</option>
        <option value="pyro">Pyro</option>
      </select>
      <ul className={styles.list}>
        {
          CharactersList?.map(character =>
            <CharacterCard character={character} key={character} />
          )
        }
      </ul>
    </>
  )
}

export default CharactersList