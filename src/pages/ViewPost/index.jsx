import { Container, ButtonList, ViewPostForm, ViewPostContainer } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi";

import { FiLock, FiUnlock } from "react-icons/fi";

import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { useParams } from "react-router-dom";


export function ViewPost() {
    
    const [postInfo, setPostInfo] = useState("")

    const params = useParams()
    

    useEffect( () => {
        async function fetchPostInfo() {
            let query = `/posts/${params.id}`
            let postResponse = await api.get(query)

            let userQuery = `/users/${postResponse.data.user_id}`
            let userResponse = await api.get(userQuery)
            let userResponseName = userResponse.data.name

            let response = {...postResponse.data, user_name: userResponseName}
            setPostInfo(response)
        }

        fetchPostInfo()
    }, [])

    return (
        <Container>
            <Header/>
            <main>
                <ButtonList>
                    <Button title={<FiArrowLeft/>} redirect={-1}/>
                </ButtonList>
                <ViewPostContainer>
                    <ViewPostForm>
                        <div>
                            <h1>  {postInfo.title || ''} </h1>
                            <button>
                                <h1>
                                    {postInfo.permission ? <FiLock/>  : <FiUnlock/> }
                                </h1>
                                <span> 
                                    {postInfo.permission ? "Privado"  : "Público"}
                                </span>
                            </button>
                        </div>

                        <div>
                            <textarea value={postInfo.description} readOnly></textarea>
                        </div>

                        <div>
                            <Button title="Voltar" redirect={-1}/>
                            <div>
                                <h2> {postInfo.user_name} </h2>
                                <p> {postInfo.created_at} </p>
                            </div>
                        </div>

                    </ViewPostForm>
                </ViewPostContainer>
            </main>
        </Container>
    )
}