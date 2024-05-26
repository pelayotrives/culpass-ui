import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "solid",
    colorscheme: "primary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "outline",
    colorscheme: "primary",
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "solid",
    colorscheme: "secondary",
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "outline",
    colorscheme: "secondary",
  },
};
export const TertiarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "solid",
    colorscheme: "tertiary",
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    variant: "outline",
    colorscheme: "tertiary",
  },
};