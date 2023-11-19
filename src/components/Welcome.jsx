import { Alert, Button, Col, Container, Row } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container>
        <Alert variant={"warning"} className="my-2 text-center">
          Benvenut* in EpiBooks!
        </Alert>
      </Container>
      <Container fluid className="bg-warning mb-4">
        <Container className="py-5">
          <h1 className="display-5 fw-bold">For Book Lovers Only</h1>
          <p className="col-md-8 fs-4">Say something....</p>
          <Button variant="secondary">Do Something...</Button>
        </Container>
      </Container>
    </>
  );
}

export default Welcome;
