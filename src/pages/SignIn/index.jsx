import { LoginForm } from "./styles";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLock, FiUser } from 'react-icons/fi'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../hooks/auth'


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn, user } = useAuth()

    const navigate = useNavigate()
    
    function handleLogin() {

         if (!email || !password) {
            return toast.error("Todos os campos devem ser preenchidos.")
         }

        signIn({ email, password })
    } 

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          handleLogin()
        }
      }


    useEffect( () => {
        if(user) {
            navigate("/")
        } 
    }, []) 

    return (
        <Container>
            <Header/>
            <ToastContainer autoClose={2000} theme="dark"/>
            <LoginForm>
                <legend> Login </legend>
                <div onKeyDown={(e) => handleKeyPress(e)}> 
                    <Input placeholder="E-mail" type="text" icon={FiUser} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="Senha" type="password" icon={FiLock} onChange={(e) => setPassword(e.target.value)}/>

                    <Button title="Entrar" onClick={() => handleLogin()}/>

                    <Link to="/signup"> Ainda não possui conta? Cadastre-se clicando aqui! </Link>
                </div>
            </LoginForm>
        </Container>
    )
}