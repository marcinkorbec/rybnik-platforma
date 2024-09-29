import React from 'react';
import { FaTools } from 'react-icons/fa';
import Tile from './Tile';
import IconWithText from './IconWithText';

const UnderConstructionTile = () => {
    const tileStyle = {
        minHeight: '800px!important',
        marginTop: '30px!important',
    };

    return (
        <Tile style={tileStyle}>
            <IconWithText Icon={FaTools} text="Zakładka w budowie, zapraszamy wkrótce" />
            <div className="loader"></div>
            <style>
                {`
                    .loader {
                    margin-top: 50px;
                    color: #8a8a8a;
                    width: 4px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
                    transform: translateX(-38px);
                    animation: l21 .5s infinite alternate linear;
                    }

                    @keyframes l21 {
                    50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
                    100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
                    }
                `}
            </style>
        </Tile>
    );
};

export default UnderConstructionTile;
