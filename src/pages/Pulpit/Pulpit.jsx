import React from "react";
import styles from "./styles/Dashboard.module.css";
import Sidebar from "../../../common/Sidebar";
import TopHeader from "./Components/TopHeader";
import CouncillorsTable from "./Components/CouncillorsTable";
import CouncillorsInfoHeader from "./Components/CouncillorsInfoHeader"

function Dashboard() {
  return (
    <main className={styles.admin}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <section className={styles.mainContent}>
          <TopHeader />
          <h1 className={styles.pageTitle}>Wykaz radnych aktualnej kadencji:</h1>
          <CouncillorsInfoHeader />
          <CouncillorsTable />
        </section>
      </div>
    </main>
  );
}

export default Dashboard;

