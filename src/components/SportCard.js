import Card from "react-bootstrap/Card";
import fondo from "../imgs/fondo.jpg";
import corriendo from "../imgs/corriendo.jpeg";
import bicicleta from "../imgs/bicicleta.jpg";

function SportCard({ sport, onClick }) {
    const backgrounds = {
        swimming: `url(${fondo})`,
        running: `url(${corriendo})`,
        cycling: `url(${bicicleta})`,
    };

    const backgroundImage = backgrounds[sport.activity];

    return (
        <Card
            style={{
                width: "17rem",
                height: "12rem",
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                cursor: "pointer",
            }}
            className="mb-3"
            onClick={onClick} // Hace que la tarjeta sea clickeable
        >
            <Card.Body>
                <Card.Text>{sport.lenght}</Card.Text>
                <Card.Text>{sport.duration}</Card.Text>
                <Card.Text>{sport.city}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SportCard;
