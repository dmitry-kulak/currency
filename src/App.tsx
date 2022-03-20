import React from "react";

import styles from "./styles/App.module.css";
import { CurrenciesTable } from "./components/CurrenciesTable/CurrenciesTable";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>DESIGN IS MY PASSION</h1>
      </header>

      <main>
        <CurrenciesTable />
      </main>
    </div>
  );
};

export default App;
