import { ProgrammingQuotes } from "./components/ProgrammingQuotes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Container from "react-bootstrap/Container";

import "./App.css";
import { InspirationQuotes } from "./components/InspirationQuotes";

function App() {
  return (
    <>
      <Header />
      <Container
        fluid="md"
        className="d-flex justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <ProgrammingQuotes />
        <InspirationQuotes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
