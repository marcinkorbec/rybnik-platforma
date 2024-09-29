import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Dashboard.module.css";
import Sidebar from "../../../common/Sidebar";
import TopHeader from "./Components/TopHeader";
import MainTiles from "./Components/MainTiles";
import CouncillorsView from "./Components/CouncillorsView";
import UnderConstructionTile from "../../../common/UnderConstructionTile";
import Calendar from 'react-calendar';
import VideoGrid from "../../../common/VideoGrid";
import 'react-calendar/dist/Calendar.css';



function Dashboard() {
  const activeView = useSelector((state) => state.sidebar.activeView);

  const renderContent = () => {
    switch (activeView) {
      case "Pulpit":
        return <MainTiles />;
      case "Lista Radnych":
        return <CouncillorsView />;
      case 'Kalendarz':
        return <Calendar />
      case 'Lista Transmisji':
        return <VideoGrid />
      default:
        return <UnderConstructionTile />;
    }
  };

  return (
    <main className={styles.admin}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <section className={styles.mainContent}>
          <TopHeader />
          {renderContent()}
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
