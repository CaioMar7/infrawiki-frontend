import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    
    async function signIn( { email, password }) {

        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@infrawiki:user", JSON.stringify(user))
            localStorage.setItem("@infrawiki:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })
            return toast.success(`Seja bem vindo, ${user.name}!`)

        } catch(error) {
            if(error.response) {
                return toast.error(error.response.data.message)
            } else {
                return toast.error("Não foi possivel realizar a autenticação.")
            }

        }
    }

    function signOut() {
        localStorage.removeItem("@infrawiki:user")
        localStorage.removeItem("@infrawiki:token")

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@infrawiki:user")
        const token = localStorage.getItem("@infrawiki:token")

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])



    return (
        <AuthContext.Provider value={ { signIn, signOut, user:data.user } }>
            {children}
            <ToastContainer autoClose={2000} theme="dark"/>
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }