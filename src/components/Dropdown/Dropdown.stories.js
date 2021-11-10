import React from "react";
import { Dropdown } from "./Dropdown";

export default {
  title: "RickAndMorty/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "THEME",
  options: ["Rick & Morty", "Amiboos", "My Little Pony"],
};
