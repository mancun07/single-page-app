import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

   
    const toggleMenu = () => {
        const sidenav = document.querySelector('.sidenav');
        sidenav.classList.toggle('sidenav-is-active');
        // if (document.body.offsetWidth > 587) {
        //             sidenav.classList.remove('sidenav-is-active');
        //         }
    }


    return (
        <header>
        <div className="navbar-wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="sidenav-trigger" onClick={toggleMenu}></div>
                    <h1 className="navbar__logo">Leather Jackets</h1>
                    <nav className="navbar__nav">
                        <div className="navbar__nav__menu">
                            <ul>
                                <li><Link to={'/single-page-app'}>ГЛАВНАЯ</Link></li>
                                <li><Link to={'/news'}>НОВОСТИ</Link></li>
                                <li><Link to={'/photos'}>ФОТО</Link></li>
                                <li><Link to={'/video'}>ВИДЕО</Link></li>
                            </ul>
                        </div>
                        <div className="navbar__nav__socials">
                            <ul>
                                <li><a href="https://vk.com/kkurtki" target="blank"><i className="fab fa-vk"></i></a></li>
                                <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="https://www.instagram.com/music_jackets/" target="blank"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    
        <div className="sidenav" id="mobile-demo">
            <ul className="sidenav__nav__menu">
                <li><Link to={'/single-page-app'} onClick={toggleMenu}>ГЛАВНАЯ</Link></li>
                <li><Link to={'/news'} onClick={toggleMenu}>НОВОСТИ</Link></li>
                <li><Link to={'/photos'} onClick={toggleMenu}>ФОТО</Link></li>
                <li><Link to={'/video'} onClick={toggleMenu}>ВИДЕО</Link></li>
            </ul>
     
        <ul className="sidenav__nav__socials">
            <li><a href="https://vk.com/kkurtki" target="blank"><i className="fab fa-vk fa-2x"></i></a></li>
            <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fab fa-youtube fa-2x"></i></a></li>
            <li><a href="https://www.instagram.com/music_jackets/" target="blank"><i className="fab fa-instagram fa-2x"></i></a></li>
        </ul>
        </div>
    </header>
    )
}

export default Navbar
