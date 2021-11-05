import React from "react";
import { PlayCard } from "./PlayCard";

export default {
  title: "RickAndMorty/PlayCard",
  component: PlayCard,
  argTypes: {},
};

const character = {
  id: 1,
  name: "Taddy Mason",
  image: "https://rickandmortyapi.com/api/character/avatar/341.jpeg",
};

const Template = (args) => <PlayCard card={character} {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Revealed = Template.bind({});
Revealed.args = {
  reveal: true,
};

export const Cleared = Template.bind({});
Cleared.args = {
  cleared: true,
};
