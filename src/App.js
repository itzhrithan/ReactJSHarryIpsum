import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from './Components/Layout/Layout';
import reducer from './store/Reducer/Reducer.js';
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
