import { useEffect, useState } from 'react'
import { GenshinCharacter } from '../interfaces/characters'
import { fetchCharacterData, fetchCharactersList } from '../handlers/fetchData'

const Home = () => {
  const [character, setCharacter] = useState<GenshinCharacter>()
  const [CharacterList, setCharactersList] = useState<string[]>([])

  const fetchData = async () => {
    await fetchCharactersList(setCharactersList)
    await fetchCharacterData(CharacterList[1], setCharacter)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {
        <img src={character?.images.icon} alt={character?.name} />
      }
    </div>
  )
}

export default Home