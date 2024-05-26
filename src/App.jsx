import React from 'react';
import EmployeeTable from './components/EmployeeTable.jsx';
import TopEmployee from './components/TopEmployee.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img  src="logo-new.png" alt="Logo" className="App-logo" />
        <h1 className='head'>Employees Activity Dashboard</h1>
      </header>
      <main>
        <div className="main-content">
          <EmployeeTable />
          <TopEmployee />
        </div>
      </main>
    </div>
  );
}

export default App;
