import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SportCompose from './SportCompose';

export default function Home() {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Cycling</h1>
                    <SportCompose />
                </Col>
                <Col>
                    <h1>Running</h1>
                    <SportCompose />
                </Col>
                <Col>
                    <h1>Swimming</h1>
                    <SportCompose />
                </Col>
            </Row>
        </div>



    )
}   