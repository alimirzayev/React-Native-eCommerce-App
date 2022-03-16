import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./routes/DrawerNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;