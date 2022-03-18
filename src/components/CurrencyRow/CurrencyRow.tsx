import React, { useState } from "react";

import styles from "../../styles/CurrenciesTable.module.css";
import { Currency } from "../../types/currencyTypes";
import { ModalHistory } from "../ModalHistory/ModalHistory";
import { getDiff } from "../../utils/getDiff";

export const CurrencyRow = React.memo(
  ({ name, code, value, previousValue }: Currency) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      return setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };

    const { diff, diffColor } = getDiff(value, previousValue);

    const diffStyle = `${styles.cell} ${styles.diffCell} ${styles[diffColor]}`;

    return (
      <>
        <div data-tip={name} className={styles.row} onClick={openModal}>
          <span className={styles.cell}>{code}</span>
          <span className={styles.cell}>{value}</span>
          <span className={diffStyle}>
            {diff > 0 && "+"}
            {diff} %
          </span>
        </div>

        {modalVisible && <ModalHistory code={code} closeModal={closeModal} />}
      </>
    );
  }
);
