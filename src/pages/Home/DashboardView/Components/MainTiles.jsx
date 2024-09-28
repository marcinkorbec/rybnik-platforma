import React from 'react';
import { FaAddressBook, FaCalendar, FaClipboardList, FaComments } from 'react-icons/fa';

const MainTiles = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
  };

  const tileStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '30px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
    height: '200px',
  };

  const iconStyle = {
    fontSize: '40px',
    marginBottom: '10px',
    color: 'rgb(201 209 216)',
  };

  const textStyle = {
    margin: 0,
    color: '#6c757d'
  };

  return (
    <div style={containerStyle}>
      <div style={tileStyle}>
        <FaAddressBook style={iconStyle} />
        <p style={textStyle}>Kontakty</p>
      </div>
      <div style={tileStyle}>
        <FaClipboardList style={iconStyle} />
        <p style={textStyle}>Posiedzenia</p>
      </div>
      <div style={tileStyle}>
        <FaCalendar style={iconStyle} />
        <p style={textStyle}>Terminarz</p>
      </div>
      <div style={tileStyle}>
        <FaComments style={iconStyle} />
        <p style={textStyle}>Tablica Ogłoszeń</p>
      </div>
    </div>
  );
};

export default MainTiles;
