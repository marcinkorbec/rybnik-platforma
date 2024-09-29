import React from 'react';
import styles from './styles/UniwersalContainer.module.css'

const UniversalContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default UniversalContainer;
