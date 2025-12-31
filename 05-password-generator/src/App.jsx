import { useState, useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [passwordLen, setPasswordLen] = useState(7);
  const [includeNum, setIncludeNum] = useState(false);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);

  const generateRandomPassword = (len, includeNum = false, includeSpecialChar = false) => {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNum) {
      charSet += "0123456789";
    }
    if (includeSpecialChar) {
      charSet += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    return Array.from({ length: len }, () => {
      const charIndex = Math.floor(Math.random() * charSet.length);
      return charSet.charAt(charIndex);
    }).join('');
  };

  const handlePasswordGenerate = () => {
    const newPassword = generateRandomPassword(passwordLen, includeNum, includeSpecialChar);
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    console.log("Password copied to clipboard");
  };

  useEffect(() => {
    console.log("called")
    handlePasswordGenerate();
  }, [passwordLen, includeNum, includeSpecialChar]);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-300 h-36 w-2xl m-4 rounded-lg">
        <div className="p-4 flex">
          <label className="flex-1 bg-white rounded-s-lg text-orange-500 text-center p-2">{password}</label>
          <button className="bg-blue-500 rounded-r-lg w-15 h-10 hover:cursor-pointer" onClick={handleCopy}>COPY</button>
        </div>
        <div className="flex justify-left pl-4">
          <div className="text-orange-500">
            <input className="bg-white" type="range" min="1" max="16" value={passwordLen} onChange={(e) => setPasswordLen(e.target.value)}></input>
            <label className="p-2">Length ({passwordLen})</label>
          </div>
          <div className="text-orange-500">
            <input className="bg-white" type="checkbox" checked={includeNum} onChange={(e) => setIncludeNum(e.target.checked)}></input>
            <label className="p-2">Include numbers</label>
          </div>
          <div className="text-orange-500">
            <input className="bg-white" type="checkbox" checked={includeSpecialChar} onChange={(e) => setIncludeSpecialChar(e.target.checked)}></input>
            <label className="p-2">Include special char</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
