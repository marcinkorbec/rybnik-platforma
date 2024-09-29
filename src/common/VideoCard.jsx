import React from 'react';
import styles from './styles/VideoCard.module.css'; // Importowanie jako obiekt

const VideoCard = ({ title, date, views, thumbnail }) => {
    return (
        <div className={styles['video-card']}>
            <iframe
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className={styles['video-info']}>
                <div className={styles['video-icon']}>
                    <img src={thumbnail} style={{ height: 50 + 'px' }} alt="Herb" />
                </div>
                <div className={styles['video-details']}>
                    <h3>{title}</h3>
                    <div className={styles['video-meta']}>
                        <span>📅 Data nagrania: {date}</span>
                        <span>👁️ {views} wyświetleń</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
