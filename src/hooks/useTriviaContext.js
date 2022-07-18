import { useContext } from "react";
import { TriviaContext } from "../context/context";

export const useTriviaContext = () => {
  const context = useContext(TriviaContext);

  if (!context) {
    throw Error("useTriviaContext must be used inside Provider Scope");
  }

  return context;
};
