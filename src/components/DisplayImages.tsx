import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

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
type randomPhotoProps = {
  download_url: string;
};
export const DisplayImages = ({
  randomQuote,
}: {
  randomQuote: randomQuoteProps | undefined;
}) => {
  const [randomPhoto, setRandomPhoto] = useState<randomPhotoProps>();

  const URL = "https://picsum.photos/v2/list?limit=100";
  useEffect(() => {
    fetchRandomPhotes();
  }, [randomQuote]);

  const fetchRandomPhotes = async () => {
    try {
      const { data } = await axios.get(URL);
      const randomPhoto = await data[Math.floor(Math.random() * data.length)];
      setRandomPhoto(randomPhoto);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  return (
    <Card.Img
      variant="top"
      src={randomPhoto?.download_url}
      alt={"Random photo from picsum-api"}
      style={{ height: "16rem" }}
    />
  );
};
