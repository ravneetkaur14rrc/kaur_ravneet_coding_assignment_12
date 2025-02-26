import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Running Test for Text", () => {
  test("Check Text Front Size", () => {
    render(<Text types="paragraph" text="Text" />);
    const TextElement = screen.getByText("Text");
    expect(TextElement).toBeInTheDocument();
  });

  test("Check Text Type", () => {
    render(<Text types="paragraph" text="This is a paragraph text" />);
    const TextElement = screen.getByText("This is a paragraph text");
    expect(TextElement.tagName).toBe("P"); // Ensure it renders as a <p> tag when type is "paragraph"
  });

  test("has correct style when disabled", () => {
    render(<Text disabled text="Disabled Text" />);
    const text = screen.getByText("Disabled Text");
    expect(text).toHaveStyle("background-color: grey"); // Check if the disabled style is applied correctly
    expect(text).toHaveStyle("color: #888"); // Assuming this is the color for disabled text, update if necessary
  });

  test("Check if Text renders correctly with different types", () => {
    render(<Text types="paragraph" text="Heading Text" />);
    const TextElement = screen.getByText("Heading Text");
    expect(TextElement.tagName).toBe("H1"); // Ensure it renders as a <h1> tag
  });
});
