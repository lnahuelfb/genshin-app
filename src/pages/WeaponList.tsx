import { useEffect, useState } from "react"
import { fetchWeaponsList } from "../handlers/fetchData"
import CharacterCard from "../components/CharacterCard"
import styles from './styles/CharacterList.module.css'

const WeaponList = () => {
  const [weaponsList, setWeaponsList] = useState<string[]>([])
  window.document.title = 'Weapons'

  useEffect(() => {
    fetchWeaponsList(setWeaponsList)
  }, [])

  return (
    <ul className={styles.list}>
      {
        weaponsList?.map((weapon) => <CharacterCard weapon={weapon} key={weapon} />)
      }
    </ul>
  )
}

export default WeaponList