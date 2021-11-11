import React from "react";
import { IncrementStepper } from "./IncrementStepper";

export default {
  title: "RickAndMorty/IncrementStepper",
  component: IncrementStepper,
};

const Template = (args) => <IncrementStepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "PLAYERS",
};
