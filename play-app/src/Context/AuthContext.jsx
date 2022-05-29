import { createContext, useContext, useState } from "react"


const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    const encodedToken = localStorage.getItem("token")

    return(
        <AuthContext.Provider value={{user,setUser,encodedToken}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider,useAuth}