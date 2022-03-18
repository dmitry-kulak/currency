import axios from "axios";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  CurrencyActionTypes,
  CurrencyState,
  DailyCurrency,
  DailyJson,
  FetchCurrencies,
  FetchHistory,
  History,
} from "../../types/currencyTypes";

const mapCurrency = (currency: DailyCurrency) => ({
  name: currency.Name,
  code: currency.CharCode,
  value: currency.Value,
  previousValue: currency.Previous,
});

export function fetchCurrencies() {
  return async (
    dispatch: ThunkDispatch<CurrencyState, void, FetchCurrencies | FetchHistory>
  ) => {
    const response = await axios.get<DailyJson>(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );

    const newCurrenciesList = Object.values(response.data.Valute)
      .map(mapCurrency)
      .sort((a, b) => (a.code > b.code ? 1 : -1));

    dispatch({
      type: CurrencyActionTypes.FETCH_CURRENCIES,
      payload: newCurrenciesList,
    });

    // how to type this?
    // @ts-ignore
    return dispatch(fetchHistory(response.data.PreviousURL));
  };
}

export function fetchHistory(previousUrl: string) {
  return async (dispatch: Dispatch) => {
    const history: History[] = [];

    while (history.length < 10) {
      if (history.length === 0) {
        const response = await axios.get<DailyJson>(previousUrl);
        history.push(response.data);
      } else {
        const response = await axios.get<DailyJson>(
          history[history.length - 1].PreviousURL
        );
        history.push(response.data);
      }
    }

    return dispatch({
      type: CurrencyActionTypes.FETCH_HISTORY,
      payload: history,
    });
  };
}
