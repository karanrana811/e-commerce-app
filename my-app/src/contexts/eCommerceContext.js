import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({children}) {
    const [prodList, setProdList] = useState([]);
    
    return (
        <DataContext.Provider value={{prodList, setProdList}}>
            {children}
        </DataContext.Provider>
    )
}