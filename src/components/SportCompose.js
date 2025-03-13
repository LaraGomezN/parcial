import SportCard from "./SportCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

export default function SportCompose() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        const URL = "https://my.api.mockaroo.com/users1.json?key=a32b4ea0";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setSports(data);
          });
    }, []);

    return (
        <Row>
            {sports.map((sport, index) => (
                <Col key={sport.id} xs={6} className="mb-3">
                    <SportCard sport={sport} />
                </Col>
            ))}
        </Row>
    );
}