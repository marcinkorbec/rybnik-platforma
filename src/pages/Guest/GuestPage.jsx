import React from 'react';
import GuestHeader from './Components/GuestHeader';
import VideoGrid from '../../common/VideoGrid';
import UniversalContainer from '../../common/UniversalContainer';

const GuestPage = () => {
    return (
        <div>
            <GuestHeader />
            <UniversalContainer>
                <VideoGrid />
            </UniversalContainer>
        </div>
    );
}

export default GuestPage;
