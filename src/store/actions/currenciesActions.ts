import axios from "axios";
import { Dispatch } from "redux";

import {
  CurrencyActionTypes,
  FetchCurrencies,
} from "../../types/currencyTypes";

type Response = {
  Date: string;
  PreviousDate: string;
  PreviousUrl: string;
  Timestamp: string;
  Valute: {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
  }[];
};

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch<FetchCurrencies>) => {
    const response = await axios.get<Response>(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );

    const newCurrenciesList = Object.values(response.data.Valute)
      .map((currency) => ({
        name: currency.Name,
        code: currency.CharCode,
        value: currency.Value,
        previousValue: currency.Previous,
      }))
      .sort((a, b) => (a.code > b.code ? 1 : -1));

    return dispatch({
      type: CurrencyActionTypes.FETCH_CURRENCIES,
      payload: newCurrenciesList,
    });
  };
};
