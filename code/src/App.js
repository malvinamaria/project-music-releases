import React from 'react';
import data from './data.json';
// import Header from "componenets/Header";
// named component
import { Album } from './componenets/Album';
// import { Artist } from './componenets/Artists';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1> ARTISTS </h1>
      <Album />
    </div>
  );
};
