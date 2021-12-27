import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DotsVerticalIcon, MailIcon } from '@heroicons/react/solid';
import { Button } from './Button';
import { ButtonProps, ButtonVariant } from './Button.interface';

const controls = {
  children: {
    control: {
      type: 'text',
    },
  },
  variant: {
    control: { type: 'inline-radio' },
  },
  size: {
    control: { type: 'inline-radio' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  fullWidth: {
    control: { type: 'boolean' },
  },
  leadingIcon: {
    control: { disable: true },
  },
  trailingIcon: {
    control: { disable: true },
  },
  icon: {
    control: { disable: true },
  },
};

export default {
  title: 'components/Button',
  component: Button,
  argTypes: controls,
  excludeStories: /.*Args$/,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { variant: ButtonVariant.primary };

export const Secondary = Template.bind({});
Secondary.args = { variant: ButtonVariant.secondary };

export const Tertiary = Template.bind({});
Tertiary.args = { variant: ButtonVariant.tertiary };

export const Destructive = Template.bind({});
Destructive.args = { variant: ButtonVariant.destructive };

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  leadingIcon: MailIcon,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: MailIcon,
};

export const OnlyIcon: Story<ButtonProps> = (args) => <Button {...args} />;
OnlyIcon.args = {
  leadingIcon: DotsVerticalIcon,
};
