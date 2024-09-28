import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../common/styles/Auth.module.css';
import { Link } from 'react-router-dom';
import routes from '../../routes';


const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login && password && email && phone) {
            toast.success('Rejestracja zakończona sukcesem!');
            navigate(routes.dashboard);
        } else {
            toast.error('Wszystkie pola muszą być uzupełnione');
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authBox}>
                <h1 className={styles.title}>Zarejestruj się</h1>
                <p className={styles.subtitle}>Uzupełnij poniższe dane, aby się zarejestrować.</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="login">Login *</label>
                        <input
                            type="text"
                            id="login"
                            value={login}
                            onChange={handleLoginChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Hasło *</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Adres Email *</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Numer Telefonu *</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.formGroupCheckbox}>
                        <input type="checkbox" id="acceptTerms" required />
                        <label htmlFor="acceptTerms">Akceptuję regulamin</label>
                    </div>
                    <button type="submit" className={styles.authButton}>ZAREJESTRUJ SIĘ</button>
                </form>
                <p className={styles.registerHelp}>
                    Masz już konto? <Link to="/login">Zaloguj się!</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
