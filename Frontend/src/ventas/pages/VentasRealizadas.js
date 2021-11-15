import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";
import "./Gestion.css";

const VentasRealizadas = ({ ventas, setNewVenta }) => {
  const deleteVentas = (event) => {
    const id = event.target.id;
    api.ventas.delete(id);
    const newVentas = ventas.filter((ventas) => ventas._id !== id);
    setNewVenta([...newVentas]);
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-11">Gestión de Ventas</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha Ventas</th>
              <th>Producto</th>
              <th>Referencia</th>
              <th>Precio</th>
              <th>Vendedor</th>
              <th>Gama</th>
              <th>Editar/Borrar</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => {
              return (
                <tr key={venta._id}>
                  <td>{venta.Fecha_Venta}</td>
                  <td>{venta.Producto}</td>
                  <td>{venta.Referencia}</td>
                  <td>{venta.Precio}</td>
                  <td>{venta.Vendedor}</td>
                  <td>{venta.Categoria}</td>
                  <td>
                    <Link to={`/VentasRealizadas/Edit/${venta._id}`}>
                    <Button variant="outline-warning">
                        M
                      </Button>
                    </Link>

                    <Button
                      variant="outline-danger"
                      onClick={deleteVentas}
                      id={venta._id}
                      className="ms-2"
                    >
                   D
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <input
            type="text"
            class="form-control"
            variant="info"
            className="float-start"
            Buscar
          />
          <Button type="button" variant="info" className="float-start">
            {" "}
            Buscar{" "}
          </Button>
        </Table>
      </Container>
    </div>
  );
};

export default VentasRealizadas;
