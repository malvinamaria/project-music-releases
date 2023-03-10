import React from 'react';
import { SvgIcons } from '../SvgIcons/SvgIcons';

import './Album.css';

// const albumsArray = data.albums.items;
export const Album = (props) => {
  const { albumsArray } = props;
  console.log(Album);
  return (
    <>
      {albumsArray.map((item) => (
        <div className="album">
          <div className="image-container">
            <img src={item.images[1].url} className="album-image" alt="Cover" />
            <SvgIcons />
          </div>
          <a href={item.external_urls.spotify} className="album-name">
            <span className="long-name">{item.name}</span>
          </a>
          <div className="artists">
            {item.artists.map((artist) => (
              <a
                className="artist-name"
                href={artist.external_urls.spotify}
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
