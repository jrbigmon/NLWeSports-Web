import './styles/main.css'
import LogoImg from './assets/components/LogoImg'
import CardsGames from './assets/components/CardsGames'
import CardsAds from './assets/components/CardsAds'
import PublishAdModalWithSearchBar from './assets/components/PublishAdModalWithSearchBar'
import CardsAdsByGame from './assets/components/CardsAdsByGame'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="mx-auto w-auto h-auto flex flex-col">
        <LogoImg />
        <CardsGames />
        <Routes>
          <Route path='/' element={<CardsAds />} />
          <Route path='/games/:id/ads' element={<CardsAdsByGame />} />
        </Routes>
        <PublishAdModalWithSearchBar />
    </div>
  )
}

export default App
