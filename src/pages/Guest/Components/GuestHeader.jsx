import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/GuestHeader.module.css';
import routes from '../../../routes';

const GuestHeader = () => {
    return (
        <header className={styles.guestHeader}>
            <div className={styles.guestContainer}>
                <div className={styles.logoContainer}>
                    <img src="/rybnik.png" alt="Logo" className={styles.logo} />
                    <span className={styles.logoText}>Rada Miasta Rybnik</span>
                </div>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Szukaj..." className={styles.searchInput} />
                    <button className={styles.searchButton}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <Link to={routes.login}>
                    <button className={styles.loginButton}>Zaloguj się</button>
                </Link>
            </div>
        </header>
    );
}

export default GuestHeader;
