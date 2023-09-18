import type { StoryObj } from '@storybook/react';

import { Button } from "./Buttons";


type Story = StoryObj<typeof Button>;


export default {
  component: Button,
  title: "Button",
  tags: ['autodocs']
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
