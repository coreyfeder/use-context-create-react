import ComponentB from './ComponentB';
import React, {useState, createContext} from 'react';
export const UserContext = createContext();


function ComponentA(){

    const [user, setUser] = useState("drill")

    return <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello, ${user}!`}</h2>
        <UserContext.Provider value={user}>
            {/* put the kids in here, or it doesn't get sent down. */}
            <ComponentB />
        </UserContext.Provider>
    </div>
}

export default ComponentA;
