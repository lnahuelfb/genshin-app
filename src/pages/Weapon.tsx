import { useEffect, useState } from "react"
import { GenshinWeapon } from "../interfaces/weapons"
import { fetchWeaponData } from "../handlers/fetchData"
import { useParams } from "react-router-dom"

const Weapon = () => {
  const [weaponData, setWeaponData] = useState<GenshinWeapon>()
  const { weapon } = useParams()

  if (typeof weapon === 'string') {
    window.document.title = weapon
  }

  useEffect(() => {
    if (typeof weapon === 'string') {
      fetchWeaponData(weapon, setWeaponData)
    }
    console.log(weaponData)
  }, [weapon])

  return (
    <div>
      <img src={weaponData?.images.awakenicon} />
    </div>
  )
}

export default Weapon