import { useEffect, useState } from 'react'
import { GenshinCharacter } from '../interfaces/characters'
import { fetchCharacterData } from '../handlers/functions'

const Home = () => {
  const [character, setCharacter] = useState<GenshinCharacter>()

  useEffect(() => {
    fetchCharacterData('https://genshin-db-api.vercel.app/api/characters?query=dehya', setCharacter)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <img src={character?.images.icon} />
    </div>
  )
}

export default Home