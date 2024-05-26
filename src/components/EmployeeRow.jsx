import React from 'react';
import PropTypes from 'prop-types';

const EmployeeRow = ({ employee }) => {
  const getBadge = (rank) => {
    switch (rank) {
      case 1:
        return <span className="badge"><img src="gold-new.png"></img></span>;
      case 2:
        return <span className="badge"><img src="silver-new.png"></img></span>;
      case 3:
        return <span className="badge"><img src="bronze-new.png"></img></span>;
      default:
        return null;
    }
  };

  return (
    <tr>
      <td>
      {getBadge(employee.rank)}
      </td>
      <td>
        
        {employee.rank}
        
      </td>
      <td>
      <div className="employee-img-container">
        <img src={employee.image} alt={employee.name} />
        <span className='employee-name'>{employee.name}</span>
      </div>
        
      </td>
      <td>{employee.designation}</td>
      <td>{employee.hoursWorked}</td>
      <td>{employee.changes}</td>
      
    </tr>
  );
};

EmployeeRow.propTypes = {
  employee: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    hoursWorked: PropTypes.string.isRequired,
    changes: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeRow;
