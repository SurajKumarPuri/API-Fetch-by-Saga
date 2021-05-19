import { call,put,takeLatest } from "redux-saga/effects";
import { receiveapi,REQUEST_API_DATA } from "./Action";
import {Apifetch } from "./Api";

function* getapidata(action){
    try{
        const data=yield call(Apifetch)
        yield put(receiveapi(data));
    }catch(e){
        console.log(e)
    }
}

export default function* mysaga(){
    yield takeLatest(REQUEST_API_DATA,getapidata)
}