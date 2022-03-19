import { Action } from "redux";

import { Currency, DailyJson } from "../../types/currencyTypes";

export class LoadCurrencies implements Action {
  static readonly Name = "LoadCurrencies";
  readonly type = LoadCurrencies.Name;
}

export class LoadCurrenciesSuccess implements Action {
  static readonly Name = "LoadCurrenciesSuccess";
  readonly type = LoadCurrenciesSuccess.Name;
  constructor(public currencies: Currency[]) {}
}

export class LoadHistory implements Action {
  static readonly Name = "LoadHistory";
  readonly type = LoadHistory.Name;
  constructor(public previousUrl: string) {}
}

export class LoadHistorySuccess implements Action {
  static readonly Name = "LoadHistorySuccess";
  readonly type = LoadHistorySuccess.Name;
  constructor(public history: DailyJson[]) {}
}

export type CurrencyActions =
  | LoadCurrencies
  | LoadCurrenciesSuccess
  | LoadHistory
  | LoadHistorySuccess;
