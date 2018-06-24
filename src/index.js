import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './index.css';
import AppContainer from './components/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';

/*  global document: false, console: false */

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
