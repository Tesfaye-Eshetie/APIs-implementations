import { ProgrammingQuotes } from "./components/ProgrammingQuotes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Container from "react-bootstrap/Container";

import { InspirationQuotes } from "./components/InspirationQuotes";
import { GetAdvice } from "./components/GetAdvice";

function App() {
  return (
    <>
      <Header />
      <Container
        fluid="md"
        className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch"
      >
        <ProgrammingQuotes />
        <GetAdvice />
      </Container>
      <Container
        fluid="md"
        className="d-flex flex-column flex-md-row justify-content-center align-items-center"
      >
        <InspirationQuotes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
