import React from "react";
import { CreateGame } from "./CreateGame";

export default {
  title: "RickAndMorty/CreateGame",
  component: CreateGame,
};

const Template = (args) => <CreateGame {...args} />;

export const Default = Template.bind({});
Default.args = {};
