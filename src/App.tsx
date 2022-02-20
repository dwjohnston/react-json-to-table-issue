import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JsonToTable } from 'react-json-to-table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <JsonToTable json = {{
          foo: "bar", 
          fiz: {
            fang: "fob"
          }
        }}> </JsonToTable>
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
  );
}

export default App;
