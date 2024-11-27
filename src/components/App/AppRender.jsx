import React from 'react';
import './AppRender.scss';
import Header from '../page1/firstScreen/header'; 
import Testmoinals from '../page1/testimoinals/testmoinals';
import Appartments from '../page1/appartments/appartments';
import Cta from '../page1/cta/cta';
import Video from '../page1/video/video';
import Maps from '../page1/maps/maps';
import CtaForm from '../page1/ctaForm/ctaForm';
import Rectangel from '../page1/rectangle4/rectangel';

function AppRender() {
  return (
    <div className='app-render-container'>
      <Header /> 
      <Appartments />
      <Testmoinals />
      <Cta />
      <Video />
      <Maps />
      <CtaForm />
      <Rectangel />
    </div>
  );
}

export default AppRender;
