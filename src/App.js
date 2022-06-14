import axios from 'axios';
import {  useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Form from './components/form/Form';


function App() {
  
  const [weathers, setWeathers] = useState([])
  const [querry, setQuerry] = useState("")
  //const [loading, setLoading] = useState(true)

  const getWeather = async ()=>{
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=f0d7e93ba0674e9ba89212131221306&q=${querry}&aqi=no`);
      setWeathers(response.data);
      console.log(response)
      //setLoading(false)
     
    } catch (error) {
      console.error(error);
      //setLoading(false)

    }
  }
  useEffect(() => {
     getWeather()
  }, [querry])

  const handleClick=(e,countryName)=>{
    setQuerry(countryName);
    getWeather()
    e.preventDefault();
  }
  

  return (
    <div className="App">
      <Form  handleClick={handleClick}/>
      {querry &&
        <Card weathers={weathers}/>}
      
    </div>
  );
}

export default App;
