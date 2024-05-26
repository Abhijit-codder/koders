import React, { useState, useEffect } from 'react';

const TopEmployee = () => {
  const [topEmployee, setTopEmployee] = useState({
    name: '',
    designation: '',
    image: '',
  });

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

export default TopEmployee;
