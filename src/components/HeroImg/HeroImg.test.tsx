import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HeroImage from "./HeroImg";

describe("HeroImage", () => {
  it("renders the title and subtitle", () => {
    const { getByText } = render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
      />,
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("calls OnClick when the button is clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <HeroImage
        imageUrl="test.jpg"
        title="Test Title"
        subtitle="Test Subtitle"
        text="Click Me"
        onClick={mockOnClick}
      />,
    );

    const button = getByText("Click Me");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
