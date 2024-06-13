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
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text alignment.",
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text font weight.",
      control: { type: 'select' },
      options: ['thin', 'normal', 'medium', 'semibold', 'bold'],
    },
    fontFamily: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text font family.",
      control: { type: 'select' },
      options: ['nunito', 'montserrat'],
    },
    fontSize: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text size.",
      control: { type: 'select' },
      options: ['display1', 'display2', 'display3', 'display4', 'display5', 'display6', 'display7', 'display8', 'display9', 'display10'],
    },
    lineHeight: {
      table: {
        category: 'Numeric',
      },
      description: "This property sets the text line height.",
      control: { type: 'number', min: 1, max: 10, step: 1 },
    },
    italic: {
      table: {
        category: 'Boolean',
      },
      description: "This property enables the italic property.",
    },
    underline: {
      table: {
        category: 'Boolean',
      },
      description: "This property enables the underline property.",
    },
    children: {
      table: {
        category: 'Text',
      },
      description:  "This property sets the component main text."
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: "left",
    children: "Labore aliqua proident aliqua.",
    italic: false,
    fontSize: "display8",
    underline: false,
    weight: "semibold",
    fontFamily: "nunito",
    lineHeight: 2,
  },
};
