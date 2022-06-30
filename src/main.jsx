import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tachyons';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { searchRobots } from './reducers';
import NameForm from "./controlledComponent";
import ButtonComponent from "./conceptofKeyinli";

const store = createStore(searchRobots);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <NameForm />
      <ButtonComponent/>
    </Provider>
  </React.StrictMode>
)
