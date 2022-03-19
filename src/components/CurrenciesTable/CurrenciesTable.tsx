import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/CurrenciesTable.module.css";
import { Currency } from "../../types/currencyTypes";
import { CurrencyRow } from "../CurrencyRow/CurrencyRow";
import { CurrencyState } from "../../store/reducers/currencyReducer";
import { LoadCurrencies } from "../../store/actions/currencyActions";

export const CurrenciesTable = () => {
  const currenciesList = useSelector<CurrencyState, Currency[]>(
    (state) => state.currenciesList
  );

  const dispatch = useDispatch();

  const renderCurrencies = (currenciesList: Currency[]) => {
    return currenciesList.map((currency) => (
      <CurrencyRow
        key={currency.code}
        name={currency.name}
        code={currency.code}
        value={currency.value}
        previousValue={currency.previousValue}
      />
    ));
  };

  useEffect(() => {
    dispatch({ ...new LoadCurrencies() });
  }, [dispatch]);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [currenciesList]);

  return (
    <>
      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.cell}>Код</span>
          <span className={styles.cell}>Цена, ₽</span>
          <span className={styles.cell}>Изменение</span>
        </div>
        {renderCurrencies(currenciesList)}
      </div>

      <ReactTooltip />
    </>
  );
};
