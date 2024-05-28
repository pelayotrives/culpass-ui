import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert Text",
    disabled: false
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Insert Number",
    disabled: false
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Insert Password",
    disabled: false
  },
};

export const Date: Story = {
  args: {
    type: "date",
    disabled: false
  },
};

