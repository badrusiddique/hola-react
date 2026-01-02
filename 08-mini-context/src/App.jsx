import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './main.jsx'

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`w-full h-full ${theme === 'DARK' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}`}>
      <h1 className="text-center text-2xl font-bold p-4">08 - MINI Context - {theme}</h1>
    </div>
  )
}

export default App
