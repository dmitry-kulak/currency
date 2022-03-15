import {
  CurrencyActionTypes,
  CurrencyActions,
  CurrencyState,
} from "../../types/currencyTypes";

const initialState = {
  currenciesList: [],
};

export const currencyReducer = (
  state: CurrencyState = initialState,
  action: CurrencyActions
): CurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { currenciesList: action.payload };

    default:
      return state;
  }
};
