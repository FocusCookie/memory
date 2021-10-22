import React from "react";
import { Card } from "./Card";

export default {
  title: "RickAndMorty/Card",
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Rick and Morty",
};
