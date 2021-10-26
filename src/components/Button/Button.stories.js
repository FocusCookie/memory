import React from "react";
import { Button } from "./Button";

export default {
  title: "RickAndMorty/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading Button",
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};
