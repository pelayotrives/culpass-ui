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
    icon: {
      control: { type: 'select' },
      options: ['none', ...Icons],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'icon', neq: 'none' },
    },
    fsize: {
      control: { type: 'select' },
      options: ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "solid1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "outline1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "solid2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "outline2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};
export const TertiarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "solid3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    fsize: "paragraph1",
    size: "sm",
    colorScheme: "outline3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
  },
};