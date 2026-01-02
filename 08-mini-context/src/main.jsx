import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

const ThemeContext = createContext(null);

const Main = () => {
  const [theme, setTheme] = useState("DARK");

  const handleClick = () => {
    setTheme(theme === "DARK" ? "LIGHT" : "DARK");
  };

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="w-full h-full">
          <App />
          <button className="rounded-md bg-blue-300 m-2 p-2 hover:cursor-pointer" onClick={handleClick}>TOGGLE THEME</button>
        </div>
      </ThemeContext.Provider>
    </StrictMode>);
}

createRoot(document.getElementById('root')).render(<Main />);

export { ThemeContext };