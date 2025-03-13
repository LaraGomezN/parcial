import Card from "react-bootstrap/Card";

function SportCard(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Body>
       <Card.Text>{props.sport.lenght}</Card.Text>
       <Card.Text>{props.sport.duration}</Card.Text>
       <Card.Text>{props.sport.city}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default SportCard;