import React from "react";
import { TableGames } from "./TableGames";
import { dbProvider } from "../../../.storybook/decorators";
// import { getDatabase } from "firebase/database";
// import { useFirebaseApp, DatabaseProvider } from "reactfire";

export default {
  title: "RickAndMorty/Table/TableGames",
  component: TableGames,
  decorators: [
    dbProvider,
    // (Story) => {
    //   const app = useFirebaseApp();
    //   const database = getDatabase(app);
    //   return (
    //     <DatabaseProvider sdk={database}>
    //       <Story />
    //     </DatabaseProvider>
    //   );
    // },
  ],
};

const Template = (args) => <TableGames {...args} />;

export const Default = Template.bind({});
Default.args = {};
