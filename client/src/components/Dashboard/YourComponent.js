import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>JSON Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Title:</strong> {item.title} | <strong>Topic:</strong> {item.topic} | <strong>Source:</strong> {item.source}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
