
import React from "react";
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c5b697cff3442e0b525c0ff20165bdca0ff172b0ac2c76b77898c746df34b6e?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Radni",
    active: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Transmisje",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/809b1761bedebc7720f5c52949ac5b47e8d13d4104b42f1ca65976b229b2660c?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Głosowanie",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f3c92be5760688408aa5e28a9d6bf7804059187fa4590dbd080edf14e999b8c?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Forum",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36875b3a6cdc8c6bbcfacc8999e5881007ab08a6525a4ce42a00daeed75d40ea?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Wiadomości",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b168603d8058eef5f24cce362575b8ec5a78632935800f782432f82b8f6a5d0?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Statystyki",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/19940b9f9a25c1b24cd4248cd2345f1f18236232be82caa394b7ba6bd04afde2?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c",
    label: "Sortowanie",
  },
  {
    icon: "https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png",
    label: "Wyloguj",
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.activeBorder} />
        <h2 className={styles.sidebarTitle}>Elektroniczna Platforma Radnego</h2>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${item.active ? styles.active : ""
                }`}
            >
              <img src={item.icon} alt="" className={styles.menuIcon} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.helpSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef8e7aad8c0d8605a8cc6dfa1933046444c5b5de431feb4f2421bf0693969c2?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c"
          alt=""
          className={styles.helpIcon}
        />
        <span>Help</span>
      </div>
    </aside>
  );
}

export default Sidebar;
