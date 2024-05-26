import React, { useState, useEffect } from 'react';
import EmployeeRow from './EmployeeRow.jsx';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const fetchedEmployees = [
        { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(42)', changes: '1.5hrs', image: 'emply-1.png' },
        { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', changes: '1.5hrs', image: 'emply-3.png' },
        { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', changes: '1.5hrs', image: 'emply-4.png' },
        { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', changes: '1.5hrs', image: 'emply-5.png' },
        { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '7(37)', changes: '1.5hrs', image: 'emply-6.png' },
        { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', changes: '1.5hrs', image: 'emply-7.png' },
        { rank: 8, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', changes: '1.5hrs', image: 'emply-2.png' },
        { rank: 9, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', changes: '1.5hrs', image: 'emply-2.png' },
        { rank: 10, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', changes: '1.5hrs', image: 'emply-2.png' },
        { rank: 11, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', changes: '1.5hrs', image: 'emply-2.png' },
        
      ];
      setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="employee-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rank</th>
            <th>Name</th>
            <th>Designation</th>
            <th>No. of hours worked</th>
            <th>Changes</th>
            
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <EmployeeRow key={index} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
