
import { createContext, useState } from 'react'

export const AuthContext = createContext(false)

export const AuthProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}
