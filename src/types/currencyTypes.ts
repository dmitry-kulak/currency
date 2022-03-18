export type DailyCurrency = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export type DailyJson = {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: DailyCurrency[];
};

export type Currency = {
  name: string;
  code: string;
  value: number;
  previousValue: number;
};

export type History = DailyJson;

export type CurrencyState = {
  currenciesList: Currency[];
  history: History[];
};

export enum CurrencyActionTypes {
  FETCH_CURRENCIES = "FETCH_CURRENCIES",
  FETCH_HISTORY = "FETCH_HISTORY",
}

export type FetchCurrencies = {
  type: CurrencyActionTypes.FETCH_CURRENCIES;
  payload: Currency[];
};

export type FetchHistory = {
  type: CurrencyActionTypes.FETCH_HISTORY;
  payload: History[];
};

export type CurrencyActions = FetchCurrencies | FetchHistory;
