import type { StoryObj } from '@storybook/react';

import Page from "./page";


type Story = StoryObj<typeof Page>;


export default {
  component: Page,
  title: "Page",
  tags: ['autodocs']
};

export const HomePage: Story = {};
