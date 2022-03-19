import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { currencyReducer } from "./reducers/currencyReducer";
import { currencyWatcher } from "./sagas/currencySaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(currencyReducer, composeEnhancers);

sagaMiddleware.run(currencyWatcher);
