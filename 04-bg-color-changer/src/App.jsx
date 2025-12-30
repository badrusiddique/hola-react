import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  const colorSchemes = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    olive: "bg-lime-200",
    yellow: "bg-yellow-500",
    pink: "bg-red-100",
    purple: "bg-purple-500",
    white: "bg-white",
    black: "bg-stone-900"
  };

  const handleColorChange = (color) => {
    setBgColor(colorSchemes[color]);
  };

  return (
    <div className={`${bgColor} min-h-screen`}>
      <h1 className="text-center text-2xl font-bold p-4 text-rose-900">04 - Background Color Changer {bgColor}</h1>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-400 p-2 flex justify-center">
        <button className="bg-red-500 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("red")}>Red</button>
        <button className="bg-green-500 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("green")}>Green</button>
        <button className="bg-blue-500 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("blue")}>Blue</button>
        <button className="bg-lime-200 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("olive")}>Olive</button>
        <button className="bg-yellow-500 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button className="bg-red-100 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("pink")}>Pink</button>
        <button className="bg-purple-500 p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("purple")}>Purple</button>
        <button className="bg-white p-2 rounded-xl px-3 py-1 mr-1 hover:cursor-pointer" onClick={() => handleColorChange("white")}>White</button>
        <button className="bg-stone-900 p-2 rounded-xl px-3 py-1 mr-1 text-white hover:cursor-pointer" onClick={() => handleColorChange("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
