import React from 'react';
// import { Albumcover } from 'components/Albumcover';
import { Artists } from './components/Artists';

// import data from './data.json';
// import Header from "componenets/Header";
// named component
// import { Album } from './components/Album';
// import { Artists } from './componenets/Artists';
// import { Artist } from './componenets/Artists';

export const App = () => {
  return (
    <div>
      <h1> albums </h1>
      {/* <Album />  */}
      <Artists />
      {/* <div>
        <Albumcover />
      </div> */}
    </div>
  );
};
