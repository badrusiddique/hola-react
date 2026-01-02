import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user && (<h1 className="text-center text-2xl font-bold p-4">{user} user have logged in</h1>)}
        </>
    )
};

export default Profile;