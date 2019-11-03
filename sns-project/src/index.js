import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from './reduxs/configureStore';

const store = configureStore();

ReactDOM.render(
    <Root store = {store} />,
    document.getElementById('root')
);

serviceWorker.unregister();