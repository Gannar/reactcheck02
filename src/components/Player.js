import { Card, Badge } from "react-bootstrap";

export default function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image,
}) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={`${name} (${team})`} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{name}</span>
          <Badge bg="dark">#{jerseyNumber}</Badge>
        </Card.Title>
        <Card.Text className="mb-1"><strong>Team:</strong> {team}</Card.Text>
        <Card.Text className="mb-1"><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text className="mb-0"><strong>Age:</strong> {age}</Card.Text>
      </Card.Body>
    </Card>
  );
}