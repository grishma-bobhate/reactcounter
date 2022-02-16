import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducers/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {watchAgeUp}from "./sagas/saga"

////**************Redux-Thunk*********** */
// import thunk from "redux-thunk";
// import logger from "redux-logger"

// const logAction = store => {
//   return next => {
//     return action => {
//       const result =next(action);
//       console.log(`Caught in the middleware ${JSON.stringify(result)}`);
//       return result
//     };
//   };
//   };

// // const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer, applyMiddleware(thunk,logger,logAction));
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
////**************Redux-Saga*********** */


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

// const action = type => store.dispatch({ type })

// function render() {
//   ReactDOM.render(
//     <App
//       value={store.getState()}
//       onAgeUp={() => action('AGE_UP')}
//       onAgeDown={() => action('AGE_DOWN')}/>,
//     document.getElementById('root')
//   )
// }

// render()
// store.subscribe(render)





 

