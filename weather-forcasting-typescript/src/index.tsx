import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";
// import rootReducer, { rootSaga } from "./components/modules";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga)

ReactDOM.render(<App />, document.getElementById("root"));
