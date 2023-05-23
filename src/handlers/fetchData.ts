import { GenshinCharacter } from "../interfaces/characters"
import { GenshinWeapon } from "../interfaces/weapons"

export const fetchCharacterData = async (character: string, setCharacter: React.Dispatch<React.SetStateAction<GenshinCharacter | undefined>>) => {
  try {
    const data = await fetch(`https://genshin-db-api.vercel.app/api/characters?query=${character}&matchAliases=true`)
    const res = await data.json()

    setCharacter(res)
  } catch (error) {
    console.error(error)
  }
}

export const fetchWeaponData = async (weapon: string, setWeapon: React.Dispatch<React.SetStateAction<GenshinWeapon | undefined>>) => {
  try {
    const data = await fetch(`https://genshin-db-api.vercel.app/api/weapons?query=${weapon}&matchAliases=true`)
    const res = await data.json()

    setWeapon(res)
  } catch (error) {
    console.error(error)
  }
}

export const fetchCharactersList = async (setCharactersList: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const data = await fetch('https://genshin-db-api.vercel.app/api/characters?query=names&matchAliases=true&matchCategories=true')
    const res = await (data.json())

    setCharactersList(res)
  } catch (error) {
    console.error(error)
  }
}

export const fetchWeaponsList = async (setWeaponsList: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const data = await fetch('https://genshin-db-api.vercel.app/api/weapons?query=names&matchCategories=true')
    const res: string[] = await (data.json())

    const resArr = new Set(res)
    const result = [...resArr]

    setWeaponsList(result)
  } catch (error) {
    console.error(error)
  }
}