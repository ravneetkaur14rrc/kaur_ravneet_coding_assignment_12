import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

const meta: Meta<ImgProps> = {
  title: "Components Assignment/Img",
  component: Img,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Toggle whether the image is disabled'
    }
  }
};

export default meta;

const ImageTemplate: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const DefaultImage = ImageTemplate.bind({});
DefaultImage.args = {
  src: "./life.jpeg",
  alt: "Positivity",
};

export const DisabledImage = ImageTemplate.bind({});
DisabledImage.args = {
  ...DefaultImage.args,
  disabled: true,
};
