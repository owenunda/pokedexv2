import './assets/style/App.css'
import {HashRouter,Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
function App() {


  return (
    <HashRouter>  
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} />

      <Route element={<ProtectedRoutes />} >
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<PokemonDetail />} />
      </Route>
    </Routes>
    </div>
      </HashRouter>
  )
}

export default App
