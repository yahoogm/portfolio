import { combineReducers } from "redux";
import { themeReducers } from "./Theme/themeSlice";

const reducers = combineReducers({
  theme: themeReducers,
});

export default reducers;
