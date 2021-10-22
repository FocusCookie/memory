import React from "react";
import { Button } from "./Button";

export default {
  title: "RickAndMorty/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Rick and Morty",
};
