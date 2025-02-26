import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: true
      }
    },
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ["../public"], // Fixed path formatting

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
