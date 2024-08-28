import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import styles from "./Home.module.css";
import Album from '../components/Album/Album';
import axios from 'axios';

const Home = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [topAlbumsCollapsed, setTopAlbumsCollapsed] = useState(true);
    const [newAlbums, setNewAlbums] = useState([]);
    const [newAlbumsCollapsed, setNewAlbumsCollapsed] = useState(true);

    const handleTopAlbumsCollapseToggle = () => {
        setTopAlbumsCollapsed(!topAlbumsCollapsed);
    };

    const handleNewAlbumsCollapseToggle = () => {
        setNewAlbumsCollapsed(!newAlbumsCollapsed);
    };

    useEffect(() => {
        const fetchTopAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top', {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setTopAlbums(response.data); // Use response.data to get the data from the response
            } catch (error) {
                console.error('Error fetching top albums:', error);
            }
        };
        fetchTopAlbums();
    }, []);
    
    useEffect(() => {
        const fetchNewAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new', {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                setNewAlbums(response.data); // Use response.data to get the data from the response
            } catch (error) {
                console.error('Error fetching top albums:', error);
            }
        };
        fetchNewAlbums();
    }, []);

  return (
    <>
        <Box className={styles.main}>
            <Navbar />
            <Hero />
            <Box component="section" className={styles.sectionContainer}>
                <div className={styles.sectionTitle}>
                    <h3>Top Albums </h3>
                    <div onClick={handleTopAlbumsCollapseToggle} style={{cursor: 'pointer', color: 'var(--color-primary)'}} className='pull-right'>{topAlbumsCollapsed ? 'Show all' : 'Collapse'}</div>
                </div>
                <div className={styles.sectionTitle}>
                    {!topAlbumsCollapsed && (
                        <div className={styles.albumgrid}>
                            {topAlbums.map((album) => (
                                <Album key={album.id} album={album} />
                            ))}
                        </div>
                    )}
                    {topAlbumsCollapsed && (
                        <div className={styles.albumgrid}>
                            {topAlbums.slice(0, 7).map((album) => (
                                <Album key={album.id} album={album} />
                            ))}
                        </div>
                    )}
                </div>
            </Box>
            <Box component="section" className={styles.sectionContainer}>
                <div className={styles.sectionTitle}>
                    <h3>New Albums </h3>
                    <div onClick={handleNewAlbumsCollapseToggle} style={{cursor: 'pointer', color: 'var(--color-primary)'}} className='pull-right'>{newAlbumsCollapsed ? 'Show all' : 'Collapse'}</div>
                </div>
                <div className={styles.sectionTitle}>
                    {!newAlbumsCollapsed && (
                        <div className={styles.albumgrid}>
                            {newAlbums.map((album) => (
                                <Album key={album.id} album={album} />
                            ))}
                        </div>
                    )}
                    {newAlbumsCollapsed && (
                        <div className={styles.albumgrid}>
                            {newAlbums.slice(0, 7).map((album) => (
                                <Album key={album.id} album={album} />
                            ))}
                        </div>
                    )}
                </div>
            </Box>
            {/* <Box component="section" className={styles.sectionContainer}>
                <div className={styles.sectionTitle}>
                    <h3>Songs </h3>
                </div>
                <div className={styles.sectionTitle}>

                </div>
            </Box> */}
        </Box>
    </>
  )
}

export default Home