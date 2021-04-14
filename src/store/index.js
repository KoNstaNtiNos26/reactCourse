import { createStore, combineReducers } from "redux";
import {chatsReduser} from "../store/chats/reduser";
import {profileReducer} from "../store/profile/reduser";



export const store = createStore(
    combineReducers({
      profile: profileReducer,
      chats: chatsReduser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );