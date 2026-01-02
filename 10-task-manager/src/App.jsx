import { useState } from 'react'
import { useLocalStorageContext } from './context/LocalStorageProvider';

function App() {
  const [task, setTask] = useState(null);
  const { items, setItem, getItem, removeItem } = useLocalStorageContext();

  const handleCreate = (e) => {
    e.preventDefault();
    setItem(Math.floor(Math.random() * 1000), { task, status: 'pending' });

    e.target.reset();
    setTask(null);
  };

  const handleComplete = (key) => {
    const item = getItem(key);
    setItem(key, { ...item, status: 'completed' });
  };

  return (
    <div className="h-screen bg-gray-300">
      <h1 className="text-2xl justify-center text-center p-4">10 - Task Manager</h1>

      <form className="flex justify-center text-center" onSubmit={handleCreate}>
        <input type="text" placeholder="Write a task" className="rounded-s-lg p-2 bg-white w-xl" onChange={e => setTask(e.target.value)} />
        <button type="submit" disabled={!task} className={`${task ? 'bg-green-700' : 'bg-gray-400'} text-white rounded-r-lg hover:cursor-pointer p-2`}>Create</button>
      </form>

      <div className="flex justify-center">
        <ul className="display-block w-xl mt-4">
          {items.map(({ key, task, status }) => (
            <li className="flex items-center justify-between bg-gray-200 rounded-lg p-2 my-2 w-xl" key={key}>
              <div>
                <input type="checkbox" className="m-2" checked={status === 'completed'} disabled={status === 'completed'} onChange={() => handleComplete(key)}></input>
                <span className={`${status === 'completed' ? 'line-through' : ''} text-sm`}>{task} - {status}</span>
              </div>
              <div>
                <button className="hover:cursor-pointer bg-blue-300 p-1">✍️</button>
                <button className="hover:cursor-pointer bg-blue-300 p-1 mx-1" onClick={() => removeItem(key)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
