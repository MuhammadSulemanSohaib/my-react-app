import React from 'react';

import Child from "./Child"

import { TransactionProvider } from './transContext';

import './App.css';

function App() {
  return (
    <TransactionProvider>

    <Child />

    </TransactionProvider>
  );
}

export default App;
