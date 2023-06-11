import { FC, useEffect, useState } from "react"
import { fetchCharacterData, fetchWeaponData } from "@handlers/fetchData"
import { Link } from "react-router-dom"
import { GenshinCharacter } from "@interfaces/characters"
import { GenshinWeapon } from "@interfaces/weapons"
import './styles/CharacterCard.module.css'

type Props = {
  character?: string
  weapon?: string
}

const CharacterCard: FC<Props> = ({ character, weapon }) => {
  const [characterData, setCharacterData] = useState<GenshinCharacter>()
  const [weaponData, setWeaponData] = useState<GenshinWeapon>()

  console.log(weapon)
  console.log(character)

  useEffect(() => {
    if (character) {
      fetchCharacterData(character, setCharacterData)
      console.log(characterData)
    }

    if (weapon) {
      fetchWeaponData(weapon, setWeaponData)
      console.log(weaponData)
    }

  }, [])

  if (weapon) {
    return (
      <article>
        <img src={weaponData?.images.icon} />
        <Link to={`${weaponData?.name}`}>
          <h3>{weaponData?.name}</h3>
        </Link>
      </article>
    )
  }

  return (
    <article>
      <img src={characterData?.images.icon} />
      <Link to={`${characterData?.name}`}>
        <h3>{characterData?.name}</h3>
      </Link>
    </article>
  )
}

export default CharacterCard