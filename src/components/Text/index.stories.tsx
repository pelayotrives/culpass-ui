import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'normal', 'medium', 'semibold', 'bold'],
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['nunito', 'montserrat'],
    },
    fontSize: {
      control: { type: 'select' },
      options: ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5'],
    },
    lineHeight: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: "left",
    children: "Voluptate ut Lorem culpa ullamco.",
    italic: false,
    fontSize: "paragraph4",
    underline: false,
    fontFamily: "nunito",
    weight: "semibold",
    lineHeight: 2,
  },
};
