import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { useThemeContext } from './context/ThemeContextProvider'

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme])

  return (
    <>
      <h1 className="text-2xl justify-center text-center m-2">09 - Theme Switcher "{theme}"</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
