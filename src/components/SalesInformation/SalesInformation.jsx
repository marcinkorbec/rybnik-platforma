import React from "react";
import styles from "./SalesInformation.module.css";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import SalesInfoHeader from "./SalesInfoHeader";
import InvoiceTable from "./InvoiceTable";

function SalesInformation() {
  return (
    <main className={styles.admin}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <section className={styles.mainContent}>
          <TopHeader />
          <h1 className={styles.pageTitle}>Wykaz radnych aktualnej kadencji:</h1>
          <SalesInfoHeader />
          <InvoiceTable />
        </section>
      </div>
    </main>
  );
}

export default SalesInformation;

