import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from "./Album.module.css";
import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material';
const Album = ({album}) => {
  const { title, image: imageAlbum, id, follows, likes } = album;
  return (
    <>
    <Card className={styles.card} key={id}>
      <CardMedia 
        className={styles.cardMedia}        
        image={imageAlbum}
        title={title}
      />
      <div style={{ padding: '4px 8px', borderRadius: '0px 0px 10px 10px', backgroundColor: '#fff'}} >
        <Chip label={ follows ? `${follows} Follows` : `${likes} Likes` }  variant="outlined" style={{ backgroundColor: 'var(--color-black)', color: '#fff'}} />
      </div>
      <CardContent style={{ padding: '2px'}}>
        <Typography variant="p" component="div" style={{ color: '#fff', fontWeight: '400', fontSize: '14px', lineHeight: '21px' }}>{title}</Typography>
      </CardContent>
    </Card>
    </>
  )
}
export default Album