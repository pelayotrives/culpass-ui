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
      table: {
        category: 'Text',
      },
      description: "This property sets the button main text. onClick must be used to route URLs.",
    },
    disabled: {
      table: {
        category: 'Boolean',
      },
      description: "This property sets whether the button will be usable or not.",
    },
    intent: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the button type and the layout it will have.",
      control: { type: 'select' },
      options: ['solid1', 'solid2', 'solid3', 'outline1', 'outline2', 'outline3', 'ghost1', 'ghost2', 'ghost3'],
    },
    icon: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets whether there is an icon in the button or not.",
      control: { type: 'select' },
      options: ['none', ...Icons],
    },
    iconPosition: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets what side will it be (dependent on the icon property).",
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'icon', neq: 'none' },
    },
    type: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the button role.",
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      
    },
    size: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the button size.",
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    adapt: {
      table: {
        category: 'Multiple Option',
      },
      description: "This property sets the button height to adapt it to its parent container.",
      control: { type: 'select' },
      options: ['auto', 'calibrate'],
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "solid1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "outline1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const PrimaryGhost: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "ghost1",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "solid2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "outline2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const SecondaryGhost: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "ghost2",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const TertiarySolid: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "solid3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const TertiaryOutline: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "outline3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};

export const TertiaryGhost: Story = {
  args: {
    children: "Lorem Ipsum",
    size: "sm",
    intent: "ghost3",
    icon: "right",
    iconPosition: "right",
    disabled: false,
    adapt: 'auto',
    type: "button"
  },
};