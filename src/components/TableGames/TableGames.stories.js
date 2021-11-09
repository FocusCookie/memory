import React from "react";
import { TableGames } from "./TableGames";
import { dbProvider } from "../../../.storybook/decorators";

export default {
  title: "RickAndMorty/Table/TableGames",
  component: TableGames,
  decorators: [dbProvider],
};

const Template = (args) => <TableGames {...args} />;

export const Default = Template.bind({});
Default.args = {};
