import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider.jsx";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
    }

    return user
        ? (<></>)
        : (
            <div className="flex flex-col items-center justify-center h-full">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={!username || !password} className={`${!username || !password ? 'bg-gray-400' : 'bg-blue-400'} rounded-2xl m-2 p-2 hover:cursor-pointer`}>Login</button>
                </form>
            </div>
        )

};

export default Login;