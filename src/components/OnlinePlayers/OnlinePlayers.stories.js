import React from "react";
import { OnlinePlayers } from "./OnlinePlayers";

export default {
  title: "RickAndMorty/OnlinePlayers",
  component: OnlinePlayers,
  argTypes: {},
};

const Template = (args) => <OnlinePlayers {...args} />;

export const Default = Template.bind({});
Default.args = {
  players: [
    "Batman 🦇",
    "Spongebob",
    "Rick",
    "Batman 🦇",
    "Spongebob",
    "Rick",
    "Batman 🦇",
    "Spongebob",
    "Rick",
    "Batman 🦇",
    "Spongebob",
    "Rick",
  ],
};
