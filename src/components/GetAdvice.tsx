import { DisplayQuote } from "./DisplayQuote";

export const GetAdvice = () => {
  const URL = "https://api.adviceslip.com/advice";

  return <DisplayQuote URL={URL} bntName="Get Advice!" />;
};
