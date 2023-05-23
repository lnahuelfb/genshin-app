import { Route, Routes } from 'react-router-dom'
import CharactersList from './pages/CharactersList'
import Character from './pages/Character'
import Home from './pages/Home'
import WeaponList from './pages/WeaponList'
import Weapon from './pages/Weapon'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<CharactersList />} />
        <Route path='/characters/:character' element={<Character />} />
        <Route path='/weapons' element={<WeaponList />} />
        <Route path='/weapons/:weapon' element={<Weapon/>}/>
      </Routes>
    </>
  )
}

export default App
