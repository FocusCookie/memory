import React from "react";
import { Scoreboard } from "./Scoreboard";

export default {
  title: "RickAndMorty/Scoreboard",
  component: Scoreboard,
  argTypes: {},
};

const game = {
  board: [],
  creator: "h0IyS9HrTLM41WqH9cghft8PttJ2",
  currentPlayer: "h0IyS9HrTLM41WqH9cghft8PttJ2",
  maxPlayers: 2,
  numberOfPairs: 2,
  players: {
    a1: { displayName: "Batman" },
    b1: { displayName: "Hulk" },
    c1: { displayName: "Spongebob" },
    d1: { displayName: "Marty Mc. Fly" },
    e1: { displayName: "Logic" },
  },
  rematch: {},
  scores: {
    a1: 12,
    b1: 56,
    c1: 35,
    d1: 45,
    e1: 5,
  },
  state: "started",
  theme: "disney",
  turn: 0,
};

const Template = (args) => <Scoreboard {...args} />;

export const Default = Template.bind({});
Default.args = { game: game };
