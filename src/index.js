import React from 'react';
import ReactDom from 'react-dom';
// import Hello from './component/Hello';

import Routes from './routers/router';

if(module.hot){
  module.hot.accept();
}
ReactDom.render(
  Routes, document.getElementById('app')
);