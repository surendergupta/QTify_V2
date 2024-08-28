import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Section from '../components/Section/Section';
import styles from "./Home.module.css";

const Home = () => {
    

    

  return (
    <>
        <Box className={styles.main}>
            <Navbar />
            <Hero />
            <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
            <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
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