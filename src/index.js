import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import tabs from './tabs.json';

ReactDOM.render(<App tabsArray={tabs}/>, document.getElementById('root'));
registerServiceWorker();
