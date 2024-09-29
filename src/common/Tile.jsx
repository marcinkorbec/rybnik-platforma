import React from 'react';

const Tile = ({ children, style }) => {
    const baseTileStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        padding: '30px',
        textAlign: 'center',
        fontSize: '18px',
        transition: 'transform 0.2s ease',
        height: '200px',
        marginTop: '30px'
    };

    const combinedStyle = { ...baseTileStyle, ...style };

    return <div style={combinedStyle}>{children}</div>;
};

export default Tile;
