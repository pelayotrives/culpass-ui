import { Meta, StoryObj } from "@storybook/react";
import { Button, Icons } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: ['solid1', 'solid2', 'solid3', 'outline1', 'outline2', 'outline3'],
    },
    fontSize: {
      control: { type: 'select' },
      options: ['sm', 'regular', 'md', 'lg', 'xl'],
    },
    icon: {
      control: { type: 'select' },
      options: ['none', ...Icons],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'icon', neq: 'none' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "solid",
    colorScheme: "solid1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "outline",
    colorScheme: "outline1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "solid",
    colorScheme: "solid2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "outline",
    colorScheme: "outline2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};
export const TertiarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "solid",
    colorScheme: "solid3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "regular",
    variant: "outline",
    colorScheme: "outline3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};