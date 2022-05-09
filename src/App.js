import React from "react";
import { actiontobeperformed } from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const action_function = useSelector((state) => state.action_function);

  const dispatch = useDispatch();
  return <h1>hi</h1>;
};
export default App;
