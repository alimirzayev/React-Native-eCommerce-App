import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./routes/DrawerNavigator";
import { Provider } from "react-redux";
import store from "./reducer/Store";

 const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;