import {combineReducers, legacy_createStore, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    music:musicReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);
export default store