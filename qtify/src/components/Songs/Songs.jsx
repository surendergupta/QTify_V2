import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import { Box } from '@mui/system';
import Carousel from '../Carousel/Carousel';
import Album from '../Album/Album';

import styles from "./Songs.module.css";

const Songs = ({title}) => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchSongsAndGenres = async () => {
      try {
        const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs',{
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        });
        const genresResponse = await axios.get('https://qtify-backend-labs.crio.do/genres',{
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        });
        console.log(songsResponse.data)
        setSongs(songsResponse.data);
        setGenres(['All', ...genresResponse.data.data]); // Add "All" to the beginning of the genres list
        setFilteredSongs(songsResponse.data); // Default to all songs
      } catch (error) {
        console.error('Error fetching songs or genres:', error);
      }
    };

    fetchSongsAndGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
    console.log(songs)
    if (newValue === 'All') {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter(song => song.genre.key === newValue));
    }
  };
  return (
    <>
      <Box component="section" className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
            <h3>{title} </h3>
        </div>
        <div className={styles.sectionTitle}>
          <Box>
            <Tabs value={selectedGenre} onChange={handleTabChange} aria-label="songs genre tabs" TabIndicatorProps={{style: {backgroundColor: 'var(--color-primary)'}}} >
              {genres.map((genre, index) => (
               <Tab key={index} label={typeof(genre) === 'object' ? genre.label : 'All'} id={genre.key} value={typeof(genre) === 'object' ? genre.key : 'All'} style={{color: 'var(--color-white)'}} />
              ))}
            </Tabs>
            <div style={{ marginTop: '20px' }}>
              <Carousel items={filteredSongs.map(song => (
                <Album key={song.id} album={song} />
              ))} />
            </div>            
          </Box>
        </div>
      </Box>      
    </>
  )
}

export default Songs