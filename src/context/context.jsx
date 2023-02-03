import axios from "axios";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user') || null)
    )

    const login = async (inputs) => {
        const res = await axios.post('http://localhost:4000/api/auth/login', inputs)
        setCurrentUser(res.data)
    }

    const logout = async () => {
        await axios.post('http://localhost:4000/api/auth/logout')
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{
            currentUser,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }