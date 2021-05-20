import { render, screen } from "@testing-library/react";
import App from "../App.js";

test("Home work as expected", () => {
  const { container } = render(<App />);
  const gifLink = container.querySelector(".Gif-link");
  expect(gifLink).toBeVisible;
});
