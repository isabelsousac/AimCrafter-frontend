import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavApp = () => {
    const [navState, setNavState] = useState(localStorage.token)

    useEffect(() => {
        if (localStorage.token) setNavState(true)
    }, [navState])

    const _signout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className="nav-container">
            <Navbar>
                <Container>
                    <Link to="/">AimCrafter</Link>
                    <Nav className="me-auto">
                        <div className="link-container">
                        {!navState ? <Link className="link-one" to="/signin">SignIn</Link> : ""}
                        </div>
                        <div className="link-container">
                        {!navState ? <Link className="link-two" to="/signup">SignUp</Link> : ""}
                        </div>
                        <div className="link-container">
                        {navState ? <Link className="link-three" to="/signout">SignOut</Link> : ""}
                        </div>
                        <button><Link to="/newcraft">Upload Craft</Link></button>
                        
        
                        {/* <Link to="/searchCrafts">Search Crafts</Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavApp;