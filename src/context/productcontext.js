// First of all I created the createContext;
// seceond time I will create provider;
// Threed I will create consumer & useContext Hook;

import { createContext, useContext } from "react";
// First of all I created the createContext;

const AppContext = createContext();

// seceond time I will create provider;

const AppProvider = ({ children }) => {
    return (
    <AppContext.Provider value="Md Mehady Hasan Akash">{children}
    </AppContext.Provider>
    )

};

// coustomHook
const useProductContext = () =>{
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
