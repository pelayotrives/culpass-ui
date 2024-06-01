import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from ".";
import { Box } from "..";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
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
    position: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the stack main position.",
      control: { type: 'select' },
      options: ['none', 'vertical', 'verticalRev', 'horizontal', 'horizontalRev'],
    },
    ref: {
      table: {
        disable: true,
      },
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "horizontal",
    as: "div",
  },
  render: (args) => (
    <Stack className="gap-3 p-8 bg-quaternary-6" {...args}>
      <Box className="w-[100px] h-[100px] bg-primary-1" />
      <Box className="w-[100px] h-[100px] bg-secondary-1" />
      <Box className="w-[100px] h-[100px] bg-tertiary-1" />
    </Stack>
  ),
};