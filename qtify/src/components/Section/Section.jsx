import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import Album from '../Album/Album';
import styles from "./Section.module.css";

const Section = ({ title, apiEndpoint, showAllButton = true }) => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [topAlbumsCollapsed, setTopAlbumsCollapsed] = useState(true);
    const handleTopAlbumsCollapseToggle = () => {
        setTopAlbumsCollapsed(!topAlbumsCollapsed);
    };
    useEffect(() => {
        const fetchTopAlbums = async () => {
            try {
                const response = await axios.get(apiEndpoint, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setTopAlbums(response.data); // Use response.data to get the data from the response
            } catch (error) {
                console.error(`Error fetching ${title}:`, error);
            }
        };
        fetchTopAlbums();
    }, [apiEndpoint, title]);
    
  return (
    <Box component="section" className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
            <h3>{title} </h3>
            {showAllButton && (
            <div onClick={handleTopAlbumsCollapseToggle} style={{cursor: 'pointer', color: 'var(--color-primary)'}} className='pull-right'>{topAlbumsCollapsed ? 'Show all' : 'Collapse'}</div>
            )}
        </div>
        <div className={styles.sectionTitle}>
            {topAlbumsCollapsed ? (
                <div className={styles.albumgrid}>
                    <Carousel items={topAlbums.map(album => <Album key={album.id} album={album} />)} />                    
                </div>
            ) : (
                <div className={styles.albumgrid}>
                    {topAlbums.map((album) => (
                        <Album key={album.id} album={album} />
                    ))}
                </div>
            )}
        </div>
    </Box>
  )
}

export default Section