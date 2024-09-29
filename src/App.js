import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import Dashboard from './pages/Home/DashboardView/Dashboard.jsx';


function App() {
  const isAuthenticated = () => {
    // Tutaj dodać potem logikę sprawdzania autentykacji
    // Na razie zwracamy true, aby zawsze przekierowywać na Dashboard
    return true;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route
            path={routes.dashboard}
            element={
              isAuthenticated() ? (
                <Dashboard />
              ) : (
                <Navigate to={routes.login} replace />
              )
            }
          />
        </Routes>
        <ToastContainer
          theme="colored"
          position="top-left"
        />
      </div>
    </Router>
  );
}

export default App;
