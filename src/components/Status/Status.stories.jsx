import React from "react";
import { Status } from "./Status";

export default {
  title: "RickAndMorty/Status",
  component: Status,
  argTypes: {},
};

const customLabels = {
  success: "Ready",
  warning: "Not Ready",
  error: "Disconnected",
};

const Template = (args) => <Status {...args} />;

export const DefaultSuccess = Template.bind({});
DefaultSuccess.args = {
  status: "success",
};

export const DefaultWarning = Template.bind({});
DefaultWarning.args = {
  status: "warning",
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  status: "error",
};

export const CustomSuccess = Template.bind({});
CustomSuccess.args = {
  status: "success",
  labels: customLabels,
};

export const CustomWarning = Template.bind({});
CustomWarning.args = {
  status: "warning",
  labels: customLabels,
};

export const CustomError = Template.bind({});
CustomError.args = {
  status: "error",
  labels: customLabels,
};
