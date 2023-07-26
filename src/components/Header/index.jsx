import { Container, LogoBox, Menu } from './styles'
import { FiLogOut, FiUser, FiMenu } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { BiUserPlus } from 'react-icons/bi'
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState, useEffect, useRef } from 'react';


export function Header() {
    const { user } = useAuth()
    const { signOut } = useAuth()

    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false)

    function toggleMobileMenu() {
        if(menuMobileIsVisible) {
            setMenuMobileIsVisible(false)
            
        } else {
            setMenuMobileIsVisible(true)
        }
    }

    function closeMobileMenu() {
        if(menuMobileIsVisible) {
            setMenuMobileIsVisible(false)
            document.removeEventListener("click", handleClickOutside)
        }   
    }

    const refMenuOutside = useRef(null)

    const handleClickOutside = (e) => {
        if(!refMenuOutside.current.contains(e.target)) {
                closeMobileMenu()
        }
    }

    useEffect(() => {
            if(menuMobileIsVisible){
                document.addEventListener("click", handleClickOutside, true)
            } 
            document.removeEventListener("click", handleClickOutside)
    }, [menuMobileIsVisible])

    useEffect(() => {
        document.body.style.overflowY = menuMobileIsVisible ? "hidden" : "auto"
    }, [menuMobileIsVisible])

    return (
        <Container>
            <LogoBox>
                <Link to="/">
                    <img src="/src/assets/pageicon.svg"/>
                    <h1> Infra Wiki </h1>
                </Link>
            </LogoBox>
            <Menu menuMobileIsVisible={menuMobileIsVisible} setMenuMobileIsVisible={setMenuMobileIsVisible} ref={refMenuOutside} >
                <ul>
                    <Link to="/" onClick={() => closeMobileMenu()}> <li> Home </li> </Link>
                    <Link to="/dashboard"> <li> Postagens </li> </Link>
                    <Link to="/"> <li> Sobre Nós </li> </Link>
                    <Link to="/">  <li> Fale Conosco </li> </Link>
                </ul>
                <ul>
                    <button onClick={() => toggleMobileMenu()}> {menuMobileIsVisible ? <GrFormClose/> : <FiMenu/>} </button>
                    {user ? 
                        <>
                            <Link to="/" onClick={signOut}> <li> <FiLogOut/> </li> </Link>
                        </>
                    : 
                    <>
                        <Link to="/login"> <li> <FiUser/> <span> Entrar </span> </li> </Link>
                        <Link to="/signup"> <li> <BiUserPlus/> <span> Cadastrar </span> </li> </Link>
                    </>
                    }
                </ul>
            </Menu>
        </Container>
    )
}