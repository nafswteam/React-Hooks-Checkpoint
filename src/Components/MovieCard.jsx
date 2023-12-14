import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ width: "14rem" }}
        variant="top"
        src={props.posterURL}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.rating}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
