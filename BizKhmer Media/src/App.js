import React, {Fragment} from 'react';
import './App.css';
import Header from './Component/Header'
import Typist_Loop from './Component/Typist_Loop'
import Slider from './Component/Slider.js'
import Grid_Info from './Component/Grid_Info'
import Grid_Submit from './Component/Grid_Submit'
import Grid_CircleContainer from './Component/Grid_CricleContainer'
import Grid_Service from './Component/Grid_Service'
import Grid_Card from './Component/Grid_Card'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
    return (
      <Fragment>

        <Header/>
        <Typist_Loop/>
        <Slider/>
        <Grid_Info/>
        <Grid_Submit/>
        <Grid_CircleContainer/>
        <Grid_Service/>
        <Grid_Card/>
        <Contact/>
        <Footer/>

      </Fragment>
    );
  }

export default App;