import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react"; //keep track of variables
import linkedIn from '../img/linkedIn.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {  /*determine if scrolling*/
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={`lg ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <Navbar.Brand href="#about"><span>Jessica Wu</span></Navbar.Brand> 
                {/* change #about */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>about</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>experience</Nav.Link>
                        <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>blog</Nav.Link>
                        <Nav.Link href="#avocations" className={activeLink === 'avocations' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('avocations')}>avocations</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>contact</Nav.Link>
                    </Nav>
                    {/* socials: linkedin, github, etc */}
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={linkedIn} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('button clicked')}><span>resume</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
