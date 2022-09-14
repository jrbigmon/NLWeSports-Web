import './styles/main.css'
import LogoImg from './assets/components/LogoImg'
import CardsGames from './assets/components/CardsGames'

function App() {
  return (
    <div className="mx-auto w-auto h-auto flex flex-col align-center justify-between">
      <LogoImg />
      <CardsGames />
    </div>
  )
}

export default App
