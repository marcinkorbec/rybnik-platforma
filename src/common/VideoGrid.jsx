import React from 'react';
import VideoCard from './VideoCard';
import styles from './styles/VideoGrid.module.css'; // Importowanie jako obiekt

const VideoGrid = () => {
    const videos = [
        {
            id: 1,
            title: 'VIII Sesja Rady Miejskiej Gminy rybniku (kadencja 2024-2029)',
            date: '2024-09-27',
            views: 136,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
        {
            id: 2,
            title: 'Sesja Rady Miejskiej w Rybniku nr VII - zwyczajna',
            date: '2024-09-26',
            views: 47,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
        {
            id: 3,
            title: 'Sesja Rady Miejskiej w Rybniku nr VII',
            date: '2024-09-26',
            views: 47,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
        {
            id: 4,
            title: 'VIII Sesja Rady Miejskiej Rybniku (kadencja 2024-2029)',
            date: '2024-09-27',
            views: 136,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
        {
            id: 5,
            title: 'Sesja Rady Miejskiej w Rybniku nr VII - zwyczajna',
            date: '2024-09-26',
            views: 47,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
        {
            id: 6,
            title: 'Sesja Rady Miejskiej w Rybniku nr VII',
            date: '2024-09-26',
            views: 47,
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/POL_Rybnik_COA.svg/1200px-POL_Rybnik_COA.svg.png',
        },
    ];

    return (
        <div className={styles['video-grid']}>
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    title={video.title}
                    date={video.date}
                    views={video.views}
                    thumbnail={video.thumbnail}
                />
            ))}
        </div>
    );
};

export default VideoGrid;
