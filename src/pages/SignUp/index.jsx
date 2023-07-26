import { LoginForm } from "./styles";
import { Container } from "./styles";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from "react-router-dom";

import { FiLock, FiMail, FiUser } from 'react-icons/fi'

import { useState } from "react";

import { api } from "../../services/api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [confirmPassword, setConfirmPassword] = useState("")


    function handleSignUp() {
        if(!name || !email || !password || !confirmPassword) {
            return toast.error("Todos os campos devem ser preenchidos.")
        }

        if(password != confirmPassword ) {
            return toast.error("A senha e a confirmação de senha não estão iguais!")
        }

        api.post("/users", { name, email, password })
        .then( () => {
            return toast.success("Usuário cadastrado com sucesso!")
        })
        .catch(error => {
            if(error.response) {
                return toast.error(error.response.data.message)
            } else {
                return toast.error("Não foi possivel cadastrar o usuário!")
            }
        })

    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          handleSignUp()
        }
      }

    return (
        <Container>
            <Header/>
            <ToastContainer autoClose={2000} theme="dark"/>
            <LoginForm>
                <legend> Crie sua conta </legend>
                <div onKeyDown={(e) => handleKeyPress(e)}> 
                    <Input placeholder="Nome" type="text" icon={FiUser} onChange={ e => setName(e.target.value)}/>
                    <Input placeholder="E-mail" type="text" icon={FiMail} onChange={ e => setEmail(e.target.value)}/>
                    <Input placeholder="Senha" type="password" icon={FiLock} onChange={ e => setPassword(e.target.value)}/>
                    <Input placeholder="Confirmar senha" type="password" icon={FiLock} onChange={ e => setConfirmPassword(e.target.value)}/>

                    <Button title="Cadastrar" nav="/" onClick={() => handleSignUp()}/>

                    <Link to="/login"> Já criou sua conta? Faça login clicando aqui! </Link>
                </div>
            </LoginForm>
        </Container>
    )
}