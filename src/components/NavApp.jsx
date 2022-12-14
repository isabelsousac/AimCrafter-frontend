import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavApp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/">AimCrafter</Link>
                    <Nav className="me-auto">
                    <NavLink to="/" activestyle={{ background:'red', color:'white' }}>
                        Home
                    </NavLink>  
                        <Link to="/signin">SignIn</Link>
                        <Link to="/signup">SignUp</Link>
                        <button><Link to="/newcraft">Upload Craft</Link></button>
                        {/* <Link to="/searchCrafts">Search Crafts</Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavApp;