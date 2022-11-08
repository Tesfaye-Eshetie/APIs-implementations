import { DisplayQuote } from "./DisplayQuote";

export const InspirationQuotes = () => {
  const URL = "https://api.themotivate365.com/stoic-quote";

  return <DisplayQuote URL={URL} bntName="Get Inspired!" />;
};
