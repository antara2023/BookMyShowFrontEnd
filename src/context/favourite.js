import { createContext } from 'react';
import { useState } from 'react';

export const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
    const [favourites, setFavouries] = useState([]);
    return (
        <FavouriteContext.Provider value={{favourites, setFavouries}}>
            {children}
        </FavouriteContext.Provider>
    )
}
export default FavouriteProvider;