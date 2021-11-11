import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductForm = ({ handleChange, handleClick, categorias, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Marca</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Referencia</Form.Label>
        <Form.Control
          type="text"
          name="description"
          //style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.description}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="price"
          onChange={handleChange}
          value={formValue.price}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL Imagen</Form.Label>
        <Form.Control
          type="text"
          name="url"
          onChange={handleChange}
          value={formValue.url}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gama</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="categoria"
          onChange={handleChange}
          value={formValue.categoria}
        >
          <option>Seleccionar</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.nombre}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

     {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Disponible"
          name="disponible"
          value={formValue.disponible}
          onChange={handleChange}
        />
          </Form.Group> */}

      <Button type="button" variant="warning">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="info"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  );
};

export default ProductForm;
