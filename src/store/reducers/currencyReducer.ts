import { Currency, DailyJson } from "../../types/currencyTypes";

import {
  CurrencyActions,
  LoadCurrenciesSuccess,
  LoadHistorySuccess,
} from "../actions/currencyActions";

export type CurrencyState = {
  currenciesList: Currency[];
  history: DailyJson[];
};

const initialState: CurrencyState = {
  currenciesList: [],
  history: [],
};

export const currencyReducer = (
  state: CurrencyState = initialState,
  action: CurrencyActions
): CurrencyState => {
  switch (action.type) {
    case LoadCurrenciesSuccess.Name:
      return { ...state, currenciesList: action.currencies };

    case LoadHistorySuccess.Name:
      return { ...state, history: action.history };

    default:
      return state;
  }
};
