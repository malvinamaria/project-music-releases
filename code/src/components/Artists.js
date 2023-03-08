import React from 'react';
// import { Album } from './components/Album';
import data from '../data.json';

// console.log(Album);

const Artists = () => {
  return (
    <div>
      {data.albums.items.map((album) => {
        return (
        <div key={album.id}>
          <h3>{album.name}</h3>
          {album.artists.map((singleArtistItem) => (
            <p key={singleArtistItem.id}>{singleArtistItem.name}</p>
            <div> 
              <img alt="Album cover" src={album.images[0].url}/>
             </div>
          ))}
        </div>
      )}}
    </div>
  );
};

export default Artists