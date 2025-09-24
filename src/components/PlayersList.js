import { Container, Row, Col } from "react-bootstrap";
import players from "../players";
import Player from "./Player";

export default function PlayersList() {
  return (
    <Container className="py-4">
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {players.map((p) => (
          <Col key={`${p.name}-${p.team}`}>
            <Player {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}