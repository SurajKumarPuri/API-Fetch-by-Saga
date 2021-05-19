import React from "react";
import Page from "./Page";
import { Provider } from "react-redux";
import store from "./Store";
function App() {
  return (
 <Provider store={store}>
  <Page/>
 </Provider>
  )
}
export default App;
