import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Last from './last';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Header/>
    <App/>
    <Main/>
    <Footer/>
   <Last/>
  </div>
);