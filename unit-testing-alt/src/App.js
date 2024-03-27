import {useEffect, useState} from 'react';
import './App.css';

function App() {
const [data, setData] = useState([]);


const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await response.json();
    setData(res);
    
    }catch (error) {
    console.log(error);
    }


  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)

  return (
    <div>
      <h1>Hallo Users</h1>
      <ol>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
}
export default App;
