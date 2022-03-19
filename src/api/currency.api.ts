import { instance } from "./api";
import { DailyJson } from "../types/currencyTypes";

export const getDaily = (day: "daily_json.js" | string) => {
  return instance.get<DailyJson>(day);
};
