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
    align: "left",
    as: "h1",
    children: "Amet excepteur qui anim fugiat.",
    italic: false,
    size: "title4",
    underline: false,
    weight: "semibold",
  },
};
