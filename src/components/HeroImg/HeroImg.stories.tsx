import React from "react";
import { StoryFn, type Meta } from "@storybook/react";
import HeroImage from "./HeroImg";
import { type IHeroImage } from "./HeroImg.types";
import { HeroImg } from ".";

export default {
  title: "Components Assignment/HeroImage",
  component: HeroImg,
} as Meta;

const Template: StoryFn<IHeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "./nature.jpeg",
  title: "Explore the world!",
  subtitle: "Discover our amazing planet earth ",
  text: "Learn More",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
