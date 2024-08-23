import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
        <Box className={styles.main}>
            <Navbar />
            <Hero />
        </Box>
    </>
  )
}

export default Home