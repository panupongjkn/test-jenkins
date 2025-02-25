import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./src/*.stories.@tsx?"],
  framework: "@storybook/react-vite", // 👈 Add this
};

export default config;
