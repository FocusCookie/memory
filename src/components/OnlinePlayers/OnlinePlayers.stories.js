import React from "react";
import { OnlinePlayers } from "./OnlinePlayers";
import { dbProvider } from "../../../.storybook/decorators";

export default {
  title: "RickAndMorty/OnlinePlayers",
  component: OnlinePlayers,
  decorators: [dbProvider],
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
