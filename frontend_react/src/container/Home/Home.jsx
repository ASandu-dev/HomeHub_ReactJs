import React from 'react';
import { CameraView, Weather } from '../../components';


import './Home.scss';
const Home = () => {
  return (
    <div className='app__Home'>
      <CameraView/>
      <Weather/>
      </div>
  )
}

export default Home