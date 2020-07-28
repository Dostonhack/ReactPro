import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Header from './Containers/header/Header' 
// import Footer from './Containers/footer/Footer'
import SignUp from './Containers/Rigester/SignUp'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <>
    
    <SignUp/>
    </>

  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();
