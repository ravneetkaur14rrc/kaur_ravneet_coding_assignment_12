import React, { useState } from "react";
import { type Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";
import { type IDropdown } from "./Dropdown.types";

const meta: Meta = {
  title: "Components Assignment/Dropdown",
  component: Dropdown,
  argTypes: {},
};
export default meta;

const DropdownTemplate: StoryFn<IDropdown> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Dropdown
      {...args}
      value={value}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const Primary = DropdownTemplate.bind({});
Primary.args = {
  options: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ],
  value: "Male",
};

export const Disabled = DropdownTemplate.bind({});
Disabled.args = {
  options: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "other", label: "Other" },
  ],
  value: "Male",
  disabled: true,
};
