import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load contact us page", () => {
  render(<Contact />);
});
