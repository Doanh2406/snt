import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import { animalListReducer } from "./reducers/animalReducers";

const initialState = {
  userLogin:{
    userInfor:localStorage.getItem('userInfor')
    ?
    JSON.parse(localStorage.getItem('userInfor')):
    null,
  },
  animalList:[],
};
const reducer = combineReducers({
    userLogin : userLoginReducer,
    animalList: animalListReducer
});

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;