import React from 'react';
import data from '../data.json';

export const Albumcover = () => {
  return (
    <div>
      {data.albums.items.map((covers) => {
        return (
          <div>
            <img alt="Album cover" src={covers.images[0].url} />
          </div>
        );
      })}
    </div>
  );
};
