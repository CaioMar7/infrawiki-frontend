import { Container, ButtonList, NewPostForm, NewPostContainer } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft, FiCamera } from "react-icons/fi";

import { FiLock, FiUnlock } from "react-icons/fi";

import { useState } from "react";

import { api } from "../../services/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";



export function NewPost() {

    const [postPermission, setPostPermission] = useState(false)
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")

    const timeNotification = 1000
    const navigate = useNavigate()

    function handlePostPermission(event) {
        event.preventDefault()
        if(postPermission) {
            setPostPermission(false)
        } else {
            setPostPermission(true)
        }
    }


    async function handleNewPost() {
        if(!postTitle) {
            return toast.error("O campo título não pode estar vazio!")
        }

        if(!postDescription) {
            return toast.error("O campo descrição não pode estar vazio!")
        }

        await api.post("/posts", {
            title: postTitle,
            description: postDescription,
            locked: postPermission
        })
        .then( () => {
            setTimeout(() => {
                navigate("/dashboard")
            }, timeNotification+700)
            return toast.success("Postagem criada com sucesso!")
        })
        .catch(error => {
            if(error.response) {
                return toast.error(error.response.data.message)
            } else {
                return toast.error("Não foi possivel criar essa postagem!")
            }
        })
    }

    return (
        <Container>
            <ToastContainer autoClose={timeNotification} theme="dark"/>
            <Header/>
            <main>
                <ButtonList>
                    <Button title={<FiArrowLeft/>} redirect={-1}/>
                </ButtonList>
                <NewPostContainer>
                    <NewPostForm>
                        <div>
                            <Input placeholder="Título" onChange={(e) => setPostTitle(e.target.value)}/>
                            <button onClick={(e) => handlePostPermission(e)}>
                                <h1>
                                    {postPermission ? <FiLock/>  : <FiUnlock/> }
                                </h1>
                                <span> 
                                    {postPermission ? "Privado"  : "Público"}
                                </span>
                            </button>
                        </div>

                        <div>
                            <textarea onChange={(e) => setPostDescription(e.target.value)}></textarea>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="postThumbnail">
                                Selecione a thumbnail da sua postagem 
                                    <FiCamera/>
                                <input id="postThumbnail" type="file"/>
                                </label>
                            </div>
                            <div>
                                <Button title="Publicar" onClick={() => handleNewPost()}/>
                                <Button title="Cancelar" redirect={-1}/>
                            </div>
                        </div>

                    </NewPostForm>
                </NewPostContainer>
            </main>
        </Container>
    )
}