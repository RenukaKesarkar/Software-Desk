import React from 'react'
import Header from './Components/Header/Header';
import Screen from './screens/Screen';
import AboutScreen from './screens/AboutScreen';
import Websolutions from './screens/Websolutions';
import ChooseUs from './screens/ChooseUS';
import Footer from './Components/Footer';
import Techscreen from './screens/Techscreen';
import OurClients from './screens/OurClients';



function App() {
  return (
  <div>
    <Header/>
    <Screen/>
    <AboutScreen/>
    <Websolutions/>
    <ChooseUs/>
    <OurClients/>
    <Footer/>
  </div>
  );
}

export default App;
