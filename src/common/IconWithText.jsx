import React from 'react';

const IconWithText = ({ Icon, text }) => {
    const iconStyle = {
        fontSize: '40px',
        marginBottom: '10px',
        color: 'rgb(201 209 216)',
    };

    const textStyle = {
        margin: 0,
        color: '#8A8A8A',
    };

    return (
        <>
            <Icon style={iconStyle} />
            <p style={textStyle}>{text}</p>
        </>
    );
};

export default IconWithText;
