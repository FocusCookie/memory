import React from "react";
import { Gameboard } from "./Gameboard";

export default {
  title: "RickAndMorty/Gameboard",
  component: Gameboard,
  argTypes: {},
};

const characters = [
  {
    card: {
      id: 1,
      name: "Taddy Mason",
      image: "https://rickandmortyapi.com/api/character/avatar/341.jpeg",
    },
    id: -1,
    reveal: false,
    cleared: false,
  },
  {
    card: {
      id: 2,
      name: "Taint Washer",
      image: "https://rickandmortyapi.com/api/character/avatar/342.jpeg",
    },
    id: -2,
    reveal: false,
    cleared: false,
  },
];

const Template = (args) => <Gameboard cards={characters} {...args} />;

export const Default = Template.bind({});
Default.args = {};
