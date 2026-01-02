import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'

function App() {

  return (
    <>
      <h1 className="text-2xl justify-center text-center m-2">Vite + React</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card />

          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeButton />

          </div>
        </div>
      </div>

    </>
  )
}

export default App
