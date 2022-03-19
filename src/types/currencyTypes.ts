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
