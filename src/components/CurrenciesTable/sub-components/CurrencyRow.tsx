import React from "react";

import styles from "../../../styles/CurrenciesTable.module.css";
import { Currency } from "../../../types/currencyTypes";

type CurrencyRowProps = Currency;

export const CurrencyRow = React.memo(
  ({ name, code, value, previousValue }: CurrencyRowProps) => {
    const diff = +(((value - previousValue) / value) * 100).toFixed(2);

    const diffColor = diff > 0 ? styles.diffPositive : styles.diffNegative;

    const diffStyle = `${styles.cell} ${styles.diffCell} ${diffColor}`;

    return (
      <tr data-tip={name} className={styles.row}>
        <td className={styles.cell}>{code}</td>
        <td className={styles.cell}>{value}</td>
        <td className={diffStyle}>
          {diff > 0 && "+"}
          {diff} %
        </td>
      </tr>
    );
  }
);
