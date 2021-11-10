import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin }) => {
  const login = (res) => {
    setLogin(true);
    localStorage.setItem("token", res.tokenId);
    console.log(res);
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };

  const loginError = (err) => {
    console.log(err);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>
        {<> <Dropdown className="p-2">
          <Dropdown.Toggle variant="primary" id="dropdown-basic" >
            Ventas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/SistemaVentas" >Nueva Venta</Dropdown.Item>
            <Dropdown.Item href="/VentasRealizadas">Consultar Ventas</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          <Dropdown className="p-2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic" >
              productos
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/CrearProducto" >Nuevo Producto</Dropdown.Item>
              <Dropdown.Item href="/Gestion">Consultar Productos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="p-2">
            <Dropdown.Toggle variant="primary" id="dropdown-basic" >
              Usuarios
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/CrearUsuario" >Nuevo Usuario</Dropdown.Item>
              <Dropdown.Item href="/TablaGestorUsuario">Consultar Usuario</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></>

        }

        {/*  <Link to="/SistemaVentas">
          <Button variant="primary" className="me-3">
            Nueva Venta
          </Button>
        </Link>

        {/* <Link to="/Carrito">
          <Button variant="danger" className="me-3">
            Carrito <Badge bg="primary">{cantCarrito}</Badge>
          </Button>
        </Link> 

        <Link to="/VentasRealizadas">
          <Button variant="primary" className="me-3">
            Gestionar Ventas
          </Button>
        </Link>

        <Link to="/CrearProducto">
          <Button variant="primary" className="me-3">
            Nuevo producto
          </Button>
        </Link>

        <Link to="/Gestion">
          <Button variant="primary" className="me-3">
            Gestionar Productos
          </Button>
        </Link>

        <Link to="/CrearUsuario">
          <Button variant="primary" className="me-3">
            Nuevo Usuarios
          </Button>
        </Link>

        <Link to="/TablaGestorUsuario">
          <Button variant="primary" className="me-3">
            Gestion Usuarios
          </Button>
        </Link>*/}

        <Link to="/">
          <Button variant="primary" className="mt-2"  onClick={logout}>
            Salir
          </Button>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <GoogleLogin
          clientId="151788115467-1niolrabbcftlb4kmp160ejrfutkbb3c.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={login}
          onFailure={loginError}
          cookiePolicy={"single_host_origin"}
        />
        ,
        {/* <Button variant="danger" onClick={login}>
          Login
        </Button> */}
      </div>
    );
  }
};

export default HeaderButtons;
