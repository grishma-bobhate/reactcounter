
import { delay, takeEvery, put } from "redux-saga/effects"
// import {takeLatest,  put} from "redux-saga/effects";

// const delay = (ms) => new Promise(res => setTimeout(res, ms))
 function* ageUpAsync(){
    // Our worker Saga: will perform the async increment task  
    // yield call(delay,4000);
    yield delay(5000);
    yield put({type: "AGE_UP_ASYNC",value:1});
    }

// Our watcher Saga: spawn a new ageUpAsync task on each   
    export function* watchAgeUp(){
        // yield takeLatest("AGE_UP", ageUpAsync)
        yield takeEvery("AGE_UP", ageUpAsync)
    }
