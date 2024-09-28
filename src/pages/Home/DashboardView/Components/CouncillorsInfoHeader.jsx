import styles from "../styles/CouncillorsInfoHeader.module.css";

function CouncillorsInfoHeader() {
  return (
    <section className={styles.salesInfoHeader}>
      <div className={styles.inputGroup}>
        <label htmlFor="customerInput" className={styles.inputLabel}>
          Radny
        </label>
        <input
          type="text"
          id="customerInput"
          className={styles.inputField}
          placeholder="Imię i nazwisko"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="invoiceInput" className={styles.inputLabel}>
          Email
        </label>
        <input
          type="text"
          id="invoiceInput"
          className={styles.inputField}
          placeholder="Wprowadź email"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="startDateInput" className={styles.inputLabel}>
          Funkcja radnego
        </label>
        <input
          type="text"
          id="startDateInput"
          className={styles.inputField}
          placeholder="Wyszukaj wg. funkcji"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="endDateInput" className={styles.inputLabel}>
          Przynależność do komisji
        </label>
        <input
          type="text"
          id="endDateInput"
          className={styles.inputField}
          placeholder="Wyszukaj wg. przynależności"
        />
      </div>
    </section>
  );
}

export default CouncillorsInfoHeader;
