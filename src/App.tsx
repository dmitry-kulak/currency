import React from "react";

import styles from "./styles/App.module.css";
import { CurrenciesTable } from "./components/CurrenciesTable/CurrenciesTable";

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>LOOKING FOR A JOB</h1>
      </header>

      <main>
        <CurrenciesTable />
      </main>

      <footer className={styles.footer}>
        <h2>Использовал:</h2>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Redux</li>
          <li>Redux-thunk</li>
          <li>Axios</li>
          <li>CSS-modules</li>
          <li>react-tooltip</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
