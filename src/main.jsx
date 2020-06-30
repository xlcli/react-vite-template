import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

import { Provider } from '/@/models/store';

import logo from '/@/images/logo.svg';
import 'antd/dist/antd.css';
import '/@/index.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={() => setCount(count + 1)}>count is: {count}</Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
