import { Container, Content, HeroBanner } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import HeroVideo from '../../assets/matrix.mp4'
import { Card } from '../../components/PostCard'

import { useState, useEffect } from 'react'

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useNavigate } from 'react-router-dom'

export function Home() {
    const [posts, setPosts] = useState([])

    const { user } = useAuth()
    const navigate = useNavigate()

    async function handleViewPost(id) {
        navigate(`/posts/${id}`)
    }
    
    useEffect( () => {
        async function fetchPosts() {

            let query = `/posts/`
            
            if(!user) {
                query = query + `?locked=0`
            }
            
            const response = await api.get(query)
            const lastThreePosts = response.data.slice(0,3)
            setPosts(lastThreePosts)
        }

        fetchPosts()
    }, [])


    return (
        <Container>
            <Header/>
            <HeroBanner>
                <video autoPlay loop muted>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </HeroBanner>
            <Content>
                <h2> ULTIMAS POSTAGENS </h2>
                <ul>
                    {
                        posts.map(post => (
                            <Card onClick={() => handleViewPost(post.id)} key={post.id} title={post.title} description={post.description} imgUrl={post.thumbnail} />
                        ))
                    }        
                </ul>
            </Content>
            <Footer/>
        </Container>
    )
}