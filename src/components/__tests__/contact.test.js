import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";

describe("contact us page test", () => {
  it("should load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("expect button on the screen", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load input for name in the document", () => {
    render(<Contact />);
    const inputField = screen.getByPlaceholderText("Name");
    expect(inputField).toBeInTheDocument();
  });

  it("2 input box should load when contact page is loaded", () => {
    render(<Contact />);
    const element = screen.getAllByRole("textbox");
    expect(element).toHaveLength(2);
  });
});
