import React, { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider(props){
    const [logged, setLogged] = useState(localStorage.getItem('logged') === 'S' ? true : false);

    return(
        <AuthContext.Provider value={{logged, setLogged}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};