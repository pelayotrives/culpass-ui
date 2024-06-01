import { Meta, StoryObj } from "@storybook/react";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the DOM tag that our component will have.",
      control: { type: 'select' },
      options: ['section', 'div', 'article', 'main', 'aside'],
    },
    ref: {
      table: {
        disable: true,
      },
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "div",
    className: "w-[100px] h-[100px] bg-primary-1"
  },
};
