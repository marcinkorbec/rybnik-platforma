
import React from "react";
import styles from "./TopHeader.module.css";

function TopHeader() {
  return (
    <header className={styles.topHeader}>
      <form className={styles.searchForm} role="search">
        <label htmlFor="searchInput" className={styles.visuallyHidden}>
          Wyszukaj
        </label>
        <div className={styles.searchWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11409849ac006ed6f9e5b1c2f8f7e4774aac40768f61b429a0785a7d42b8aa70?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c"
            alt=""
            className={styles.searchIcon}
          />
          <input
            type="search"
            id="searchInput"
            className={styles.searchInput}
            placeholder="Wyszukaj"
            aria-label="Search"
          />
        </div>
      </form>
      <div className={styles.userActions}>
        <button
          className={styles.notificationButton}
          aria-label="Powiadomienia"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/955bc1a5ac8b5b34e62e55e5393830480944b9dad7edae89cc7378c578382ede?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c"
            alt=""
            className={styles.notificationIcon}
          />
        </button>
        <button className={styles.userProfileButton} aria-label="Profil Użytkownika">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a02742d5397f950c7057b677944345b4de579bfb64b114f242272b9b61fb0c3?placeholderIfAbsent=true&apiKey=cabd41898d2b4f96868f37ab96d7062c"
            alt=""
            className={styles.userAvatar}
          />
        </button>
      </div>
    </header>
  );
}

export default TopHeader;
