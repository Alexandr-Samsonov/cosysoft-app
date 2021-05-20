import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '..';

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};
