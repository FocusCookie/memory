import React from "react";
import { Login } from "./Login";

export default {
  title: "RickAndMorty/Login",
  component: Login,
  argTypes: {},
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
