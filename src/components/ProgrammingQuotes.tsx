import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

type randomQuoteProps = {
  id: string;
  author: string;
  en: string;
};

export const ProgrammingQuotes = () => {
  const [randomQuote, setRandomQuote] = useState<randomQuoteProps>();

  const URL = "https://programming-quotes-api.herokuapp.com/quotes/random";

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const { data } = await axios.get(URL);
      setRandomQuote(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src="./images/qoute.avif" />
      <Card.Body>
        <Card.Title>{randomQuote?.author}</Card.Title>
        <Card.Text>{randomQuote?.en}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            fetchRandomQuote();
          }}
        >
          Random Programming Quote!
        </Button>
      </Card.Body>
    </Card>
  );
};
