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
      options: ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5', 'paragraph6', 'paragraph7', 'paragraph8', 'paragraph9', 'paragraph10'],
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
