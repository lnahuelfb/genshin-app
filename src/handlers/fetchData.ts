import { GenshinCharacter } from "../interfaces/characters"
import { GenshinWeapon } from "../interfaces/weapons"

export const fetchCharacterData = async (character: string, setCharacter: React.Dispatch<React.SetStateAction<GenshinCharacter | undefined>>) => {
  try {
    const res = await fetch(`https://genshin-db-api.vercel.app/api/characters?query=${character}&matchAliases=true`)

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }

    const data = await res.json()

    setCharacter(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchWeaponData = async (weapon: string, setWeapon: React.Dispatch<React.SetStateAction<GenshinWeapon | undefined>>) => {
  try {
    const res = await fetch(`https://genshin-db-api.vercel.app/api/weapons?query=${weapon}&matchAliases=true`)

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }

    const data = await res.json()

    setWeapon(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchCharactersList = async (setCharactersList: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const res = await fetch('https://genshin-db-api.vercel.app/api/characters?query=names&matchAliases=true&matchCategories=true')

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }
    const data = await (res.json())

    setCharactersList(data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchWeaponsList = async (setWeaponsList: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const res = await fetch('https://genshin-db-api.vercel.app/api/weapons?query=names&matchCategories=true')

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }

    const data: string[] = await (res.json())

    const dataArr = new Set(data)
    const result = [...dataArr]

    setWeaponsList(result)
  } catch (error) {
    console.error(error)
  }
}