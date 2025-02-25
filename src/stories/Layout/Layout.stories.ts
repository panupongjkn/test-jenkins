import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../../components/Layout";

const meta = {
  title: "Example/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};