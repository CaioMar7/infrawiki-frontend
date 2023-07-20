import { Container, ButtonList, PostsContainer, MenuPostsContainer, PostsList } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiSearch } from "react-icons/fi";
import { FiUnlock, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const { user } = useAuth()

    const navigate = useNavigate()

    const [postsVisibility, setPostsVisibility] = useState(0)
    const [postsSearch, setPostsSearch] = useState("")

    const [posts, setPosts] = useState([])


    async function handleViewPost(id) {
        navigate(`/posts/${id}`)
    }

    useEffect( () => {
        async function fetchPosts() {

            let query = `/posts/`
            
            if(postsSearch) {
                query = query + `?title=${postsSearch}`
            }

            if(postsVisibility && user) {
                query = query + `?locked=${postsVisibility}`
            }
            
            let response = await api.get(query)
            setPosts(response.data)
        }

        fetchPosts()
    }, [postsVisibility, postsSearch])

    console.log(posts)
    return (
        <Container>
            <Header/>
            <main>
                <ButtonList>
                    <Button title="<" redirect="-1"/>
                    { user ? 
                        <Button title="+" redirect="/newpost"/>
                    : "" }
                </ButtonList>
                <PostsContainer>
                    <MenuPostsContainer>
                    <div>
                        <Input placeholder="Pesquisar" icon={FiSearch} onChange={(e) => setPostsSearch(e.target.value)}/>
                    </div>
                    { user ? 
                    <div onChange={(e) => setPostsVisibility(e.target.value)}>
                        <input type="radio" value="" name="type" defaultChecked /> Todos
                        <input type="radio" value="1" name="type" /> Privados
                        <input type="radio" value="0" name="type" /> Público
                    </div>
                    : "" } 
                    </MenuPostsContainer>
                    <PostsList>
                        {
                            posts.map( post => (
                                
                            <li key={String(post.id)} onClick={() => handleViewPost(post.id)}>
                                <div>
                                    <img src={post.thumbnail}/>
                                </div>
                                <div>
                                    <h1> {post.title} </h1>
                                    <p> {post.description}  </p>
                                    <span> 
                                        { post.locked == 1
                                        ? 
                                        <>
                                            <FiLock/>
                                            Privado
                                        </>
                                        : 
                                        <>
                                            <FiUnlock/>
                                            Público
                                        </>}
                                    </span>
                                </div>
                            </li>


                            ))
                        }
                    </PostsList>
                </PostsContainer>
            </main>
        </Container>
    )
}