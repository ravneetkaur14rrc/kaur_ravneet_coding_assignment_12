import { type Meta, type StoryObj } from "@storybook/react";
import Label from "./Label";
import { type ILabel } from "./Label.types";

const meta: Meta = {
  title: "Components Assignment/Label",
  component: Label,
  argTypes: {},
};
export default meta;

export const Default: StoryObj<ILabel> = {
  args: {
    htmlFor: "my-input",
    text: "RRC Polytech",
  },
};

export const DisabledLabel: StoryObj<ILabel> = {
  args: {
    ...Default.args,
    size: "large",
    disabled: true,
  },
};
