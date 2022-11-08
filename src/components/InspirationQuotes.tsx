import { DisplayQuote } from "./DisplayQuote";

export const InspirationQuotes = () => {
  const URL = "https://api.adviceslip.com/advice";

  return <DisplayQuote URL={URL} bntName="Get Advice!" />;
};
