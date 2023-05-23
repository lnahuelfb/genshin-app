import { useEffect, useState } from "react"
import { fetchWeaponsList } from "../handlers/functions"
import { Link } from "react-router-dom"

const WeaponList = () => {
  const [weaponsList, setWeaponsList] = useState<string[]>([])

  useEffect(() => {
    fetchWeaponsList(setWeaponsList)
  }, [])

  return (
    <div>
      Weapons
      {
        weaponsList?.map((weapon) => <li key={weapon}><Link to={weapon}>{weapon}</Link></li>)
      }
    </div>
  )
}

export default WeaponList