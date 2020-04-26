import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';


const insuredLogin = () => {
  window.location.href = process.env.MY_CLAIMS_URL_INSURED
}


const externalLogin = () => {
  window.location.href = process.env.MY_CLAIMS_URL_EXTERNAL
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
