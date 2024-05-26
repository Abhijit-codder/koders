/*Importing react library and PropTypes library which is used for 
checking the props the component receives*/
import React from 'react';
import PropTypes from 'prop-types';

/*this block of code is a helper function for getting the badge according to the given rank;
returns gold for 1,silver for 2,bronnze for 3 and others nothing*/
const EmployeeRow = ({ employee }) => {
  const getBadge = (rank) => {
    switch (rank) {
      case 1:
        return <span className="badge "><img className="emply-img" src="gold-new.png"></img></span>;
      case 2:
        return <span className="badge"><img className="emply-img" src="silver-new.png"></img></span>;
      case 3:
        return <span className="badge"><img className="emply-img" src="bronze-new.png"></img></span>;
      default:
        return null;
    }
  };

  return (
    <tr>
      {/*displays the badge for employees rank */}
      <td>
      {getBadge(employee.rank)}
      </td>
      {/*displays the rank of employees*/}
      <td>
        <span className='employee-name'>{employee.rank}</span>
      </td>
      {/*displays the image and name of employees*/}
      <td>
      <div className="employee-img-container">
        <img className='emply-img' src={employee.image} alt={employee.name} />
        <span className='employee-name'>{employee.name}</span>
      </div>
        
      </td>
      {/*displays the designation and hours worked of employees*/}
      <td>{employee.designation}</td>
      <td>{employee.hoursWorked}</td>
      <td>
        <div className="rank-img" >
          <img src={employee.rankimage} alt={employee.name} />
          {employee.changes}
        </div>
        </td>
      
    </tr>
  );
};

{/*defining propType object to show the types and requirement of employee prop*/}
EmployeeRow.propTypes = {
  employee: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    hoursWorked: PropTypes.string.isRequired,
    changes: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rankimage: PropTypes.string.isRequired,

  }).isRequired,
};

export default EmployeeRow;
