import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SignUpForm from "./SignUpForm.jsx";

export default function Signup () {


  return (
    <Container>
      <Row>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  )
}