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
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text alignment.",
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    as: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the DOM tag that our component will have.",
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text weight.",
      control: { type: 'select' },
      options: ['thin', 'normal', 'medium', 'semibold', 'bold'],
    },
    fontSize: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text font size.",
      control: { type: 'select' },
      options: ['title1', 'title2', 'title3', 'title4', 'title5'],
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
    fontSize: "title4",
    underline: false,
    weight: "semibold",
    lineHeight: 2,
  },
};
