import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      axios.get('http://backend-sistem-906-v1-env.eba-zmizyni3.ap-southeast-2.elasticbeanstalk.com:5000/about')
      .then(function (response) {
        setMyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    getData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myData?.data.description}
        </p>
        <p>
          Telah Menggunakan CICD pada AWS S3
        </p>
      </header>
    </div>
  );
}

export default App;
