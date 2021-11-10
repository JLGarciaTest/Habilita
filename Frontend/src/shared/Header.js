import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login}) => {
  return (
    <Navbar bg="info" variant="light">
      <Container >
        <Navbar.Brand href="/"> </Navbar.Brand>
        <Nav className="justify-content-end">
          <HeaderButtons
            isLoggedIn={isLoggedIn}
            setLogin={login}
          //  cantCarrito={cantCarrito}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
