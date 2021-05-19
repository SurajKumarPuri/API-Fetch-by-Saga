import { createStore,applyMiddleware } from "redux";
import  createSagaMiddleware from "redux-saga";
import reducerData from "./Reducer";
import mysaga from "./Saga";
const saga=createSagaMiddleware();
const store=createStore(reducerData,applyMiddleware(saga))
saga.run(mysaga)
export default store;