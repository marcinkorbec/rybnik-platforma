import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveView } from "../features/sidebarSlice";
import styles from "./styles/Sidebar.module.css";
import routes from "../routes";

const menuItems = [
  {
    icon: "/assets/sidebar_menu_icons/pulpit.svg",
    label: "Pulpit",
  },
  {
    icon: "/assets/sidebar_menu_icons/posiedzenie.svg",
    label: "Lista Radnych",
  },
  {
    icon: "/assets/sidebar_menu_icons/kalendarz.svg",
    label: "Kalendarz",
  },
  {
    icon: "/assets/sidebar_menu_icons/biblioteka.svg",
    label: "Biblioteka",
  },
  {
    icon: "/assets/sidebar_menu_icons/kontakty.svg",
    label: "Kontakty",
  },
  {
    icon: "/assets/sidebar_menu_icons/rejestry.svg",
    label: "Rejestry",
  },
  {
    icon: "/assets/sidebar_menu_icons/lista_transmisji.svg",
    label: "Lista Transmisji",
  },
  {
    icon: "/assets/sidebar_menu_icons/portal.svg",
    label: "Portal",
  },
  {
    icon: "/assets/sidebar_menu_icons/opcje_systemu.svg",
    label: "Opcje Systemu",
  },
  {
    icon: "/assets/sidebar_menu_icons/wyloguj.svg",
    label: "Wyloguj",
  },
];

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeView = useSelector((state) => state.sidebar.activeView);

  const handleMenuItemClick = (index, label) => {
    if (label === "Wyloguj") {
      navigate(routes.login);
    } else {
      dispatch(setActiveView(label));
    }
  };

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
              className={`${styles.menuItem} ${activeView === item.label ? styles.active : ""
                }`}
              onClick={() => handleMenuItemClick(index, item.label)}
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
          alt="Help Icon"
          className={styles.helpIcon}
        />
        <span>Help</span>
      </div>
    </aside>
  );
}

export default Sidebar;
