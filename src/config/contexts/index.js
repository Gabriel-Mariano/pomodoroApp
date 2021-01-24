import React, { useState, createContext } from 'react';

export const MyContext = createContext();



export default ({children})=>{
    const [data,setData] = useState({
        name:'',
        defaultTime:25,
        defaultBreak:5
    });
    
    return(
        <MyContext.Provider value={{data,setData}}>
            {children}
        </MyContext.Provider>
    );
}