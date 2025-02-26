import { type Meta, type StoryObj } from "@storybook/react";
import Text from "./Text";
import { type IText } from "./Text.types";
import { type ILabel } from "../Label/Label.types";

const meta: Meta = {
  title: "Components Assignment/Text",
  component: Text,
  argTypes: {},
};
export default meta;

export const DefaultText: StoryObj<IText> = {
  args: {
    types: "paragraph",
    text: "Positivity feeds the soul.",
  },
};

export const DisabledText: StoryObj<IText> = {
  args: {
    types: "paragraph",
    text: "Positivity feeds the soul.",
    disabled: true,
  },
};
