import React from 'react';
import { SvgIcons } from '../SvgIcons/SvgIcons';

import './Album.css';

// const albumsArray = data.albums.items;
export const Album = (props) => {
  const { albumsArray } = props;
  return (
    <>
      {albumsArray.map((item) => (
        <div className="album-card">
          <div className="image-container">
            <img src={item.images[2].url} className="album-image" alt="Cover" />
            <SvgIcons />
          </div>
          <a className="album-name">{item.name}</a>
          <div className="artists">
            {item.artists.map((artist) => (
              <a
                className="artist-name"
                // eslint-disable-next-line react/jsx-closing-bracket-location
              >
                <span>{artist.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
