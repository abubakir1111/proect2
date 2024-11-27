import React, { createContext, useRef } from 'react';


export const AppContext = createContext(null);
const Context = ({ children }) => {
    const divRef = useRef(null);

    const scrollToDiv = () => {
        divRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppContext.Provider value={{divRef, scrollToDiv}}>
            {children}
         </AppContext.Provider>
    );
}

export default Context;
