import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";
import "./Gestion.css";

const Gestion = ({ productos, setProductos }) => {
  const deleteProduct = (event) => {
    const id = event.target.id;
    api.products.delete(id);
    console.log(productos);
    const newProducts = productos.filter((product) => product._id !== id);
    setProductos([...newProducts]);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Lista de Productos</h1>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
              return (
                <tr key={producto._id}>
                  <td>{producto.title}</td>
                  <td>{producto.description}</td>
                  <td>{producto.price}</td>
                  <td>
                    <img
                      className="t-img"
                      src={producto.url}
                      alt={producto.nombre}
                    />
                  </td>
                  <td>{producto.categoria}</td>
                 
                  <td>
                    <Link to={`/Gestion/Edit/${producto._id}`}>
                      <Button variant="outline-warning">
                        M
                      </Button>
                    </Link>

                    <Button
                      variant="outline-danger"
                      onClick={deleteProduct}
                      id={producto._id}
                      className="ms-2"
                    >
                     D
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Gestion;
