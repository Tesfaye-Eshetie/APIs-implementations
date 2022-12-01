import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { DisplayImages } from "./DisplayImages";

type slipProps = {
  id: string;
  advice: string;
};
type randomQuoteProps = {
  id: string;
  author: string;
  en: string;

  slip: slipProps;
  quote: string;
};

export const DisplayQuote = ({
  URL,
  bntName,
}: {
  URL: string;
  bntName: string;
}) => {
  const [randomQuote, setRandomQuote] = useState<randomQuoteProps>();

  useEffect(() => {
    fetchRandomQuote(URL);
  }, []);

  const fetchRandomQuote = async (URL: string) => {
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
    <Card style={{ width: "20rem", minHeight: "32rem" }} className="m-2">
      <DisplayImages randomQuote={randomQuote} />
      <Card.Body>
        <Card.Title>
          {randomQuote?.author
            ? `Author: ${randomQuote.author}`
            : "Random Advice"}
        </Card.Title>
        <Card.Text>
          {randomQuote?.en || randomQuote?.quote || randomQuote?.slip?.advice}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            fetchRandomQuote(URL);
          }}
        >
          {bntName}
        </Button>
      </Card.Body>
    </Card>
  );
};
