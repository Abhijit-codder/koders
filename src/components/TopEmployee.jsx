//import important library to be used
import React, { useState, useEffect } from 'react';

/*here defining component for TopEmployee.state to store the top employees details and
 intializing empty string for name,designation and image of top employee*/
const TopEmployee = () => {
  const [topEmployee, setTopEmployee] = useState({
    name: '',
    designation: '',
    image: '',
  });
  
  /*performing side effects using useeffect hook,defining async function to fetch top emplyee data
  and providing sample top employee data to stimulate a fetch request,setting the top employee data
  to the state and calling the fetch topemployee function to load */
  useEffect(() => {
    const fetchTopEmployee = async () => {
      const fetchedTopEmployee = {
        name: 'Rakesh Sharma',
        designation: 'UI/UX Designer',
        image: 'top-emply.png',
      };
      setTopEmployee(fetchedTopEmployee);
    };
    fetchTopEmployee();
  }, []);
  
  //in this block rendering the top employees details
  return (
    <div className="top-employee">
      <img className='top-emply-img' src={topEmployee.image} alt={topEmployee.name} />
      <h1 className='top-emply-title'>Employee of the Month</h1>
      <h2 className='top-emply-name'>{topEmployee.name}</h2>
      <p className='top-emply-desig'>{topEmployee.designation}</p>
      <img className='bottom-img' src="top-emply-bottom.png" alt="" />
    </div>
  );
};

// exportings the TopEmployee component as the default export
export default TopEmployee;
