import { Meta, StoryObj } from "@storybook/react";
import { Display } from ".";

const meta: Meta<typeof Display> = {
  title: "Components/Display",
  component: Display,
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
      options: ['display1', 'display2', 'display3', 'display4', 'display5'],
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
    children: "Labore aliqua proident aliqua.",
    italic: false,
    fontSize: "display4",
    underline: false,
    weight: "semibold",
    fontFamily: "nunito",
    lineHeight: 2,
  },
};
