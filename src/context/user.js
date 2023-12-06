import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;