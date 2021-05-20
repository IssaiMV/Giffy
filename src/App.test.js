import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const title = await screen.findByText(/Última busqueda/i);
  expect(title).toBeInTheDocument();
});
