import React from "react";

import styles from "../../../styles/CurrenciesTable.module.css";
import { Currency } from "../../../types/currencyTypes";

type CurrencyRowProps = Currency;

export const CurrencyRow = React.memo(
  ({ name, code, value, previousValue }: CurrencyRowProps) => {
    const diff = +(value - previousValue).toFixed(4);

    const diffStyle = diff > 0 ? styles.diffPositive : styles.diffNegative;

    return (
      <tr data-tip={name} className={styles.row}>
        <td className={styles.cell}>{code}</td>
        <td className={styles.cell}>{value}</td>
        <td className={`${styles.cell} ${diffStyle}`}>{diff}</td>
      </tr>
    );
  }
);
