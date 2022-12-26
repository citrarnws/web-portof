import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logoc.png';
import '../components/NavBar.css';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="C|Citra"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="header">
                        <div className="nav__menu">
                            <ul className="nav__list grid">
                                <li className="nav__item">
                                    <a href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#profile" className={activeLink === 'profile' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('profile')}>Profile
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#producs" className={activeLink === 'producs' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('producs')}>Producs
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}