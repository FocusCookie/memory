import React from "react";
import { Select } from "./Select";

export default {
  title: "RickAndMorty/Select",
  component: Select,
  argTypes: {},
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const CustomLabels = Template.bind({});
CustomLabels.args = { labels: { on: "Ready 👍", off: "👎 Not Ready" } };

export const InitOn = Template.bind({});
InitOn.args = { init: true };

export const InitOff = Template.bind({});
InitOff.args = { init: false };

export const Disabled = Template.bind({});
Disabled.args = { init: true, disabled: true };
