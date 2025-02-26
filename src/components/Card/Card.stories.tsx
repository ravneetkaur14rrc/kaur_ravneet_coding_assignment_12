import React from "react";
import { type Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import { ICard } from "./Card.types";

export default {
  title: "Components Assignment/Card",
  component: Card,
  parameters: {}
} as Meta<ICard>;

const CardTemplate: StoryFn<ICard> = (args) => <Card {...args} />;

export const Default = CardTemplate.bind({});
Default.args = {
  imageUrl: "./staypositive.jpg",
  title: "Stay Positive",
  content: "Find the positivity in every moment.",
  buttonText: "Click Me",
};

export const Disabled = CardTemplate.bind({});
Disabled.args = {
  imageUrl: "./Believe.jpg",
  title: "Self-Confidence",
  content: "Just believe in yourself and be confident about your moves.",
  buttonText: "Click Me",
  disabled: true,
};
