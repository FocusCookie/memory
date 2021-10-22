import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const rickAndMorty = screen.getByText(/rick and morty/i);
  expect(rickAndMorty).toBeInTheDocument();
});
