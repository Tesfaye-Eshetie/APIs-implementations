import Container from "react-bootstrap/Container";
import { BsArrowUpCircleFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="p-5 bg-dark text-white text-center position-relative"
    >
      <Container>
        <p className="lead">Copyright &copy; 2022 Tesfaye.</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <BsArrowUpCircleFill className="h1 text-white" />
        </a>
      </Container>
    </footer>
  );
};
