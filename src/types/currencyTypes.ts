export type Currency = {
  name: string;
  code: string;
  value: number;
  previousValue: number;
};

export type CurrencyState = {
  currenciesList: Currency[];
};

export enum CurrencyActionTypes {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
}

export type FetchCurrencies = {
  type: CurrencyActionTypes.FETCH_CURRENCIES;
  payload: Currency[];
};

export type CurrencyActions = FetchCurrencies;
