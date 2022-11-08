import { DisplayQuote } from "./DisplayQuote";

export const ProgrammingQuotes = () => {
  const URL = "https://programming-quotes-api.herokuapp.com/quotes/random";

  return <DisplayQuote URL={URL} bntName="Random Programming Quote!" />;
};
