import React from 'react';
import data from './data.json';

import { Album } from './components/Album/Album';
import './index.css';

const albumsArray = data.albums.items;
// console.log(data);

export const App = () => {
  return (
    <main className="main-container">
      <section className="album-container">
        <Album albumsArray={albumsArray} />
      </section>
    </main>
  );
};
