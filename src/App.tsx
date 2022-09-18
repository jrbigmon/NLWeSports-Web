import './styles/main.css'
import LogoImg from './assets/components/LogoImg'
import CardsGames from './assets/components/CardsGames'
import SearchDuoBar from './assets/components/SearchDuoBar'
import CardsAds from './assets/components/CardsAds'

function App() {
  return (
    <div className="mx-auto w-auto h-auto flex flex-col">
      <LogoImg />
      <CardsGames />
      <CardsAds />
      <SearchDuoBar />
    </div>
  )
}

export default App
