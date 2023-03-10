import React from 'react';
import { Header } from 'components/Header/Header';
import data from './data.json';

import { Album } from './components/Album/Album';

import './index.css';

const albumsArray = data.albums.items;
// console.log(data);

export const App = () => {
  console.log(App);
  return (
    <main className="app-container">
      <Header />
      <section className="album-container">
        <Album albumsArray={albumsArray} />
      </section>
    </main>
  );
};
