import './styles/main.css'
import LogoImg from './assets/components/LogoImg'
import CardsGames from './assets/components/CardsGames'
import CardsAds from './assets/components/CardsAds'
import PublishAdModalWithSearchBar from './assets/components/PublishAdModalWithSearchBar'

function App() {
  return (
    <div className="mx-auto w-auto h-auto flex flex-col">
      <LogoImg />
      <CardsGames />
      <CardsAds />
      <PublishAdModalWithSearchBar/>
    </div>
  )
}

export default App
