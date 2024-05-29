import { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'normal', 'medium', 'semibold', 'bold'],
    },
    size: {
      control: { type: 'select' },
      options: ['title1', 'title2', 'title3', 'title4', 'title5'],
    },
    lineHeight: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
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
    align: "left",
    as: "h1",
    children: "Amet excepteur qui anim fugiat.",
    italic: false,
    size: "title4",
    underline: false,
    weight: "semibold",
    lineHeight: 2,
  },
};
