import React from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/ModalHistory.module.css";
import { History, CurrencyState } from "../../types/currencyTypes";
import { getDiff } from "../../utils/getDiff";

type ModalHistoryProps = {
  code: string;
  closeModal: React.MouseEventHandler;
};

export const ModalHistory = ({ code, closeModal }: ModalHistoryProps) => {
  const history = useSelector<CurrencyState, History[]>(
    (state) => state.history
  );

  const currentHistory = (code: string, history: History[]) => {
    const formatDate = (date: string) => {
      const addPad = (date: number) => {
        return date.toString().padStart(2, "0");
      };

      const dateInst = new Date(date);

      const dateArr = [
        addPad(dateInst.getDate()),
        addPad(dateInst.getMonth()),
        dateInst.getFullYear(),
      ];

      return dateArr.join("-");
    };

    return history.map((date) => {
      const valuteValues = Object.values(date.Valute);

      return {
        date: formatDate(date.Date),
        value: valuteValues.find((currency) => currency.CharCode === code)!
          .Value,
        previousValue: valuteValues.find(
          (currency) => currency.CharCode === code
        )!.Previous,
      };
    });
  };

  const renderRows = () => {
    return currentHistory(code, history).map((date) => {
      const { diff, diffColor } = getDiff(date.value, date.previousValue);

      const diffStyle = `${styles.cell} ${styles.diffCell} ${styles[diffColor]}`;

      return (
        <div key={date.date} className={styles.row}>
          <span className={styles.cell}>{date.date}</span>
          <span className={styles.cell}>{date.value}</span>
          <span className={diffStyle}>
            {diff > 0 && "+"}
            {diff} %
          </span>
        </div>
      );
    });
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.body} onClick={closeModal}>
      <div className={styles.content} onClick={stopPropagation}>
        <h2 className={styles.heading}>
          <span>История курса валюты ({code})</span>{" "}
          <span className={styles.closeButton} onClick={closeModal}>
            ✖
          </span>
        </h2>
        <div className={styles.table}>
          <header className={styles.header}>
            <span className={styles.cell}>Дата</span>
            <span className={styles.cell}>Цена ₽</span>
            <span className={styles.cell}>Изменение</span>
          </header>
          {renderRows()}
        </div>
      </div>
    </div>
  );
};
