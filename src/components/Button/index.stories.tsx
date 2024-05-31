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
    children: {
      description: "This property sets the button main text. onClick must be used to route URLs.",
    },
    disabled: {
      description: "This property sets whether the button will be usable or not.",
    },
    intent: {
      description: "This property sets the button type and the layout it will have.",
      control: { type: 'select' },
      options: ['solid1', 'solid2', 'solid3', 'outline1', 'outline2', 'outline3'],
    },
    icon: {
      description: "This property sets whether there is an icon in the button or not.",
      control: { type: 'select' },
      options: ['none', ...Icons],
    },
    iconPosition: {
      description: "This property sets what side will it be (dependent on the icon property).",
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'icon', neq: 'none' },
    },
    type: {
      description: "This property sets the button role.",
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      
    },
    size: {
      description: "This property sets the button size.",
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    fontSize: {
      description: "(TBD) This property sets the button font size.",
      control: { type: 'select' },
      options: ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5',],
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    fontSize: "paragraph4",
    size: "sm",
    intent: "solid1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "paragraph4",
    intent: "outline1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "paragraph4",
    intent: "solid2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "paragraph4",
    intent: "outline2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};
export const TertiarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "paragraph4",
    intent: "solid3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    fontSize: "paragraph4",
    intent: "outline3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    type: "button"
  },
};