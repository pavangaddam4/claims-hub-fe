import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';


const insuredLogin = () => {
  window.location.href = 'https://myclaimshub.stateauto.com'
}


const externalLogin = () => {
  window.location.href = 'https://myclaimshub.stateauto.com/getting-started'
}

function App() {
  return (
    <div>
      <div class='AppHeader'> <span class='title'>State Auto Insurance</span> </div>
      <div class='btnLinkDiv'>
          <div class='btn' onClick={() => insuredLogin()}> <span class='btnTitle'>Insured Login</span> </div>
          <div>&nbsp;</div>
          <div class='btn' onClick={() => externalLogin()}> <span class='btnTitle'>External Login</span> </div>
      </div>
    </div>
  );
}

export default App;
