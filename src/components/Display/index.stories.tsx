import { Meta, StoryObj } from "@storybook/react";
import { Display } from ".";

const meta: Meta<typeof Display> = {
  title: "Components/Display",
  component: Display,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    align: "left",
    children: "Labore aliqua proident aliqua.",
    italic: false,
    size: "display4",
    underline: false,
    weight: "semibold",
  },
};
