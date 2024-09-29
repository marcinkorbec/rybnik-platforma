import React from 'react';
import { FaAddressBook, FaCalendar, FaClipboardList, FaComments } from 'react-icons/fa';
import Tile from '../../../../common/Tile';
import IconWithText from '../../../../common/IconWithText';

const MainTiles = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <Tile>
        <IconWithText Icon={FaAddressBook} text="Nadchodzące i archiwalne posiedzenia" />
      </Tile>
      <Tile>
        <IconWithText Icon={FaClipboardList} text="Kalendarz" />
      </Tile>
      <Tile>
        <IconWithText Icon={FaCalendar} text="Tablica Ogłoszeń" />
      </Tile>
      <Tile>
        <IconWithText Icon={FaComments} text="Wyślij Mail/SMS" />
      </Tile>
    </div>
  );
};

export default MainTiles;
