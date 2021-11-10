import React from "react";
import { Table } from "./Table";
import { Button } from "../Button/Button";

export default {
  title: "RickAndMorty/Table",
  component: Table,
  argTypes: {},
};

const joinButtonArgs = {
  label: "JOIN",
  variant: "secondary",
};
const joinButton = <Button {...joinButtonArgs}></Button>;

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ["Theme", "# of Players", "# of Pairs", "Join"],
  rows: [
    ["Disney", "3/4", "12", joinButton],
    ["My Little Pony", "1/4", "9", joinButton],
    ["Rick & Morty", "1/2", "33", joinButton],
  ],
};

export const specialClassname = Template.bind({});
specialClassname.args = {
  headers: ["Theme", "# of Players", "# of Pairs", "Join"],
  rows: [
    ["Disney", "3/4", "12", joinButton],
    ["My Little Pony", "1/4", "9", joinButton],
    ["Rick & Morty", "1/2", "33", joinButton],
  ],
  className: "myClass",
};
