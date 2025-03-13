import SportCard from "./SportCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function SportCompose({ activity }) {
    const [sports, setSports] = useState([]);
    const [selectedSport, setSelectedSport] = useState(null);

    useEffect(() => {
        const URL = "https://my.api.mockaroo.com/users1.json?key=a32b4ea0";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setSports(data);
            });
    }, []);

    const filteredSports = sports.filter((sport) => sport.activity === activity);

    return (
        <>
            <Row>
                {filteredSports.map((sport) => (
                    <Col key={sport.id} xs={6} className="mb-3">
                        <SportCard 
                            sport={sport} 
                            onClick={() => setSelectedSport(sport)} 
                        />
                    </Col>
                ))}
            </Row>

            <Modal show={!!selectedSport} onHide={() => setSelectedSport(null)} centered>
                <Modal.Body className="d-flex flex-column align-items-center">
                    {selectedSport && <SportCard sport={selectedSport} />}
                    <Button variant="secondary" onClick={() => setSelectedSport(null)} className="mt-3">
                        Cerrar
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}
