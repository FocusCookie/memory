import React from "react";
import { Gameboard } from "./Gameboard";
import { getMockData } from "../../services/api.services";

export default {
  title: "RickAndMorty/Gameboard",
  component: Gameboard,
  argTypes: {},
};

const characters = getMockData().slice(0, 6);

const Template = (args) => <Gameboard characters={characters} {...args} />;

export const Default = Template.bind({});
Default.args = {};
