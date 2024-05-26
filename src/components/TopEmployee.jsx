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
      <img src={topEmployee.image} alt={topEmployee.name} />
      <h2>{topEmployee.name}</h2>
      <p>{topEmployee.designation}</p>
      <img src={topEmployee.image} alt={topEmployee.name} />
    </div>
  );
};

export default TopEmployee;
