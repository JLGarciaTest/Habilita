import Zapatos1 from "../components/Zapatos";
import { Container, Row, Col } from "react-bootstrap";


const TablaProductos = () => {
  const Zapatos = [
    {
        id : "D&G001",
        marca : "Dolce & Gabbana",
        title: "Botas de cuero",
        description: "Botas de cuero para hombres con altura hasta los tobillos",
        price: 6930000,
        category: "Elegante",
        url:"https://imagizer.imageshack.com/v2/565x720q90/r/922/4gQefR.jpg", 
    },
    {
        id: "D&G005",
        marca : "Dolce & Gabbana",
        title: "Botines de cuero",
        description: "Botines de nueva generación en piel de becerro engomado de la marca Dolce & Gabbana",
        price: 5513500,
        category: "Juvenil",
        url: "https://imagizer.imageshack.com/v2/354x452q90/r/922/bmxP8j.jpg",
    },
   
    {
        id: "BBY006",
        marca : "Burberry",
        title: "Esparteñas de piel",
        description: "Esparteñas en piel de ovino y suela de goma ",
        price: 1606500,
        category: "Informal",
        url: "https://imagizer.imageshack.com/v2/489x452q90/r/924/zdHmdN.jpg",
    }
];


  return (
    <Container>
      <Row>
        {Zapatos.map((zapato) => (
          <Col xs={4}>
            <Zapatos1 Zapatos={zapato} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
