/*importing necessary libraries,employeeTable component and TopEmployee component 
and app css file for styling */
import React from 'react';
import EmployeeTable from './components/EmployeeTable.jsx';
import TopEmployee from './components/TopEmployee.jsx';
import './App.css';

/*here defining main app component  */
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img  src="logo-new.png" alt="Logo" className="App-logo" />
        <h1 className="head">Employees Activity Dashboard</h1>
        
      </header>
      <div className="date-container">
        <div className="date-part">March 30, 2024</div>
        <div className="date-part">09:36 AM</div>
      </div>
      <main>
        <div className="main-content">
          {/*rendering the EmployeeTable and TopEmployee component */}
          <EmployeeTable />
          <TopEmployee />
        </div>
      </main>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
