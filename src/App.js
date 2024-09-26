import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SalesInformation from './components/SalesInformation/SalesInformation.jsx';
import Login from './components/LoginView/Login.jsx';
import './App.css';

function App() {
  const isAuthenticated = () => {
    // Tutaj dodaj logikę sprawdzania autentykacji
    // Na razie zwracamy true, aby zawsze przekierowywać na SalesInformation
    return true;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              isAuthenticated() ? (
                <SalesInformation />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
