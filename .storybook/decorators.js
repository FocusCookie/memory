import { getDatabase } from "firebase/database";
import { useFirebaseApp, DatabaseProvider } from "reactfire";

export const dbProvider = (Story) => {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  return (
    <DatabaseProvider sdk={database}>
      <Story />
    </DatabaseProvider>
  );
};
