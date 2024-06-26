import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the input type.",
      control: { type: 'select' },
      options: ['text', 'date', 'email', 'number', 'tel', 'password', 'file', 'hidden', 'file'],
    },
    placeholder: {
      table: {
        category: 'Text',
      },
      description: "This property sets the component placeholder so the user can see the required format or content.",
      control: { type: 'text' },
      if: { arg: 'type', neq: 'date' }
    },
    fontSize: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the text size.",
      control: { type: 'select' },
      options: ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5',],
    },
    disabled: {
      table: {
        category: 'Boolean',
      },
      description: "This property disables the input.",
    },
    required: {
      table: {
        category: 'Boolean',
      },
      description: "This property makes the input required.",
    },
    readOnly: {
      table: {
        category: 'Boolean',
      },
      description: "This property prevents the user from writing.",
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: "Insert Text",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Insert Number",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Insert Password",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const Date: Story = {
  args: {
    type: "date",
    disabled: false,
    readOnly: false,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Insert Email",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "Insert Telephone",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const Hidden: Story = {
  args: {
    type: "hidden",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

export const File: Story = {
  args: {
    type: "file",
    disabled: false,
    readOnly: false,
    required: false,
    fontSize: "paragraph4"
  },
};

