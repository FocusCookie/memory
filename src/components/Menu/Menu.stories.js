import React from "react";
import { Menu } from "./Menu";

export default {
  title: "RickAndMorty/Menu",
  component: Menu,
  argTypes: {},
};

const Template = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = {
  initiallyOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  initiallyOpen: false,
};
