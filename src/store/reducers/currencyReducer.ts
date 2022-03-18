import {
  CurrencyActionTypes,
  CurrencyActions,
  CurrencyState,
} from "../../types/currencyTypes";

const initialState = {
  currenciesList: [],
  history: [],
};

export const currencyReducer = (
  state: CurrencyState = initialState,
  action: CurrencyActions
): CurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { ...state, currenciesList: action.payload };

    case CurrencyActionTypes.FETCH_HISTORY:
      return { ...state, history: action.payload };

    default:
      return state;
  }
};
