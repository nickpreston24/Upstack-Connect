import React, { useState, useEffect } from 'react'
export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {

    const auth = { message: "Nothing here yet" };

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
