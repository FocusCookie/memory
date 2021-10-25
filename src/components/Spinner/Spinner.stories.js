import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "RickAndMorty/Spinner",
  component: Spinner,
  argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "red",
};
