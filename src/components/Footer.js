import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

export default function Footer() {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const URL = "https://my.api.mockaroo.com/users.json?key=a32b4ea0";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setStats(data);
          });
    }, []);

    return (
        <footer className="bg-primary text-white py-3" style={{ backgroundColor: "#0a1931" }}>
            <Row className="d-flex align-items-left">
                <Col xs="auto">
                        <img 
                            src={stats.photo} 
                            alt="User Avatar" 
                            width="50" 
                            height="50"
                        />
                </Col>
                <Col xs="auto">
                    <h1>{stats.name}</h1>
                </Col>

                <Col xs="auto">
                    <h1>{stats.running_time}</h1>
                </Col>
                <Col xs="auto">
                    <h1>{stats.swimming_time}</h1>
                </Col>
                <Col xs="auto">
                    <h1>{stats.cycling_time}</h1>
                </Col>
            </Row>
        </footer>
    );
}
