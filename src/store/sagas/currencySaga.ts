import { call, put, takeEvery } from "redux-saga/effects";

import { AxiosResponse } from "axios";
import { DailyCurrency, DailyJson } from "../../types/currencyTypes";
import { SagaIterator } from "redux-saga";
import { getDaily } from "../../api/currency.api";
import {
  LoadCurrencies,
  LoadCurrenciesSuccess,
  LoadHistory,
  LoadHistorySuccess,
} from "../actions/currencyActions";

const mapCurrency = (currency: DailyCurrency) => ({
  name: currency.Name,
  code: currency.CharCode,
  value: currency.Value,
  previousValue: currency.Previous,
});

function* fetchCurrencies() {
  const response: AxiosResponse<DailyJson> = yield call(getDaily);

  const newCurrenciesList = Object.values(response.data.Valute)
    .map(mapCurrency)
    .sort((a, b) => (a.code > b.code ? 1 : -1));

  yield put({ ...new LoadCurrenciesSuccess(newCurrenciesList) });

  yield put({ ...new LoadHistory(response.data.PreviousURL) });
}

function* fetchHistory(action: LoadHistory) {
  const history: DailyJson[] = [];

  while (history.length < 10) {
    if (history.length === 0) {
      const response: AxiosResponse<DailyJson> = yield call(
        getDaily,
        action.previousUrl
      );
      history.push(response.data);
    } else {
      const response: AxiosResponse<DailyJson> = yield call(
        getDaily,
        history[history.length - 1].PreviousURL
      );
      history.push(response.data);
    }
  }

  yield put({ ...new LoadHistorySuccess(history.reverse()) });
}

export function* currencyWatcher(): SagaIterator {
  yield takeEvery(LoadCurrencies.Name, fetchCurrencies);
  yield takeEvery(LoadHistory.Name, fetchHistory);
}
