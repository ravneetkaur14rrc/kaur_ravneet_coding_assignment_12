import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { IButton } from "./Button.types";

export default {
  title: 'Components Assignment/Button',
  component: Button,
  parameters: {}
} as Meta<IButton>;

const ButtonTemplate: StoryFn<IButton> = (props) => <Button {...props} />;

export const DefaultButton = ButtonTemplate.bind({});
DefaultButton.args = {
  primary: false,
  size: 'medium',
  text: 'Hello',
};

export const ButtonDisabled = ButtonTemplate.bind({});
ButtonDisabled.args = {
  primary: false,
  size: 'medium',
  text: 'Hello',
  disabled: true,
};
