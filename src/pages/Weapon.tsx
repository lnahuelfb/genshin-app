import { useEffect, useState } from "react"
import { GenshinWeapon } from "../interfaces/weapons"
import { fetchWeaponData } from "../handlers/functions"
import { useParams } from "react-router-dom"

const Weapon = () => {
  const [weaponData, setWeaponData] = useState<GenshinWeapon>()
  const { weapon } = useParams()

  useEffect(() => {
    fetchWeaponData(`https://genshin-db-api.vercel.app/api/weapons?query=${weapon}&matchAliases=true`, setWeaponData)
    console.log(weaponData)
  }, [weapon])

  return (
    <div>
      <img src={weaponData?.images.awakenicon} />
    </div>
  )
}

export default Weapon