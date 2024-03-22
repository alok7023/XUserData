import React, { useState, useEffect } from "react";
import "./App.css";
const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Display the card of User Data</h1>
      <div className="cardContainer">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="cardStyle">
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{JSON.stringify(item.address)}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
