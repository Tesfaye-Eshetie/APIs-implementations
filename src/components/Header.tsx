import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="#" className="ms-4">
          <img
            alt="APIs-implementations"
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ms-4">
          <Nav
            className="ms-auto my-2 my-lg-0 me-5"
            style={{ maxHeight: "50vh" }}
            navbarScroll
          >
            <Nav.Link href="#proquote">Programming Quote</Nav.Link>
            <Nav.Link href="#advice">Advice</Nav.Link>
            <Nav.Link href="#inspire">Inspiration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
