import { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children: "Amet excepteur qui anim fugiat.",
    size: "title4",
    align: "left",
    weight: "semibold",
    italic: false,
    underline: false
  },
};
