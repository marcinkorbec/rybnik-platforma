import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

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
      navigate('/');
    } else {
      alert('Nieprawidłowy login lub hasło');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
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
          <button type="submit" className={styles.loginButton}>ZALOGUJ SIĘ</button>
        </form>
        <p className={styles.loginHelp}>Problemy z logowaniem?</p>
      </div>
    </div>
  );
};

export default Login;
