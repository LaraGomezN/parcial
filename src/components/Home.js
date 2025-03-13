import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SportCompose from './SportCompose';

export default function Home() {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Cycling</h1>
                    <SportCompose activity={"cycling"}/>
                </Col>
                <Col>
                    <h1>Running</h1>
                    <SportCompose activity={"running"}/>
                </Col>
                <Col>
                    <h1>Swimming</h1>
                    <SportCompose activity={"swimming"}/>
                </Col>
            </Row>
        </div>



    )
}   