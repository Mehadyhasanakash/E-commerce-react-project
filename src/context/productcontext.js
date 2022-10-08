// First of all I created the createContext;
// seceond time I will create provider;
// Threed I will create consumer & useContext Hook;

import { createContext, useContext, useEffect, useReducer } from "react";
// First of all I created the createContext;
import axios from "axios";
import reducer from '../reducer/productReducer'


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialSate ={
    isLodding : false,
    isError : false,
    product : [],
    futureProduct : [],
}


// seceond time I will create provider;

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialSate);

 
    const getProduct = async (url) =>{
        const res = await axios.get(url);
        const product = await res.data;
        console.log(product)

    }
    useEffect( () =>{
        getProduct(API);
    }, [])
    return (
    <AppContext.Provider value={{...state}}>{children}
    </AppContext.Provider>
    )

};

// coustomHook
const useProductContext = () =>{
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
