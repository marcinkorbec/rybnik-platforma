import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../common/styles/Auth.module.css';
import routes from '../../routes';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === 'adm' && password === 'adm') {
      toast.success('Logowanie zakończone sukcesem!');
      navigate(routes.dashboard);
    } else {
      toast.error('Nieprawidłowy login lub hasło');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1 className={styles.title}>Witaj</h1>
        <p className={styles.subtitle}>Zaloguj się wpisując swój login i hasło.</p>
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
          <div className={styles.formGroupCheckbox}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Zapamiętaj mnie</label>
          </div>
          <button type="submit" className={styles.authButton}>ZALOGUJ SIĘ</button>
        </form>
        <p className={styles.loginHelp}>Problemy z logowaniem?</p>
      </div>
    </div>
  );
};

export default Login;
