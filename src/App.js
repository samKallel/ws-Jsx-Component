import React from 'react';
import './App.css';
import Entete from './Component/Entete';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Titre from './Component/Profile/Titre';
import Adresse from './Component/Profile/Adresse';
import LettreMotiv from './Component/Bagage/LettreMotiv';
import Cv from './Component/Bagage/Cv';
import Projet from './Component/Bagage/Projet';

function App() {
  return (
    <div className="App">
    <Entete/>     
    <div className="cadre">
    <h1>Portfolio</h1>
    <div className='ph-nom'>
       <ProfilePhoto/>
       <FullName/>
    </div>
    <br/><hr/>
    <Titre/>
    <Adresse/>
    </div>
    <div className='bagages'>
    <Cv/>
    <LettreMotiv/>
    <Projet/>
    </div>
    </div>
  );
}

export default App;
