import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [loc, setLoc] = useState("");
  const notFound = document.querySelector('.notfound');
  const dataPr = document.querySelector('.wDataPrimary');
  const dataSec = document.querySelector('.wDataSecondary');

  const fetchWeather = () => {
    const url1 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const url2 = '?unitGroup=metric&key=2RB9ML2JW4GSLRHGE9FL3TDJD&contentType=json';

    axios.get(url1+loc+url2).then(res => {
      setWeather(res.data);
      notFound.style.display = "none";
      dataPr.style.display = "flex";
      dataSec.style.display = "flex";
    })
    .catch(err => {
      notFound.style.display = "block";
      dataPr.style.display = "none";
      dataSec.style.display = "none";
    })
  }
  return (
    <div className="App">
      <div className='container'>
        <input type='text' className='location' placeholder='Insert Location' onChange={e => setLoc(e.currentTarget.value)}></input>
        <button className='searchbtn' onClick={fetchWeather}><i className="fa fa-search" aria-hidden="true"></i></button>
        <div className='notfound'>
          <p>Location Not found</p>
        </div>
        <div className='wDataPrimary'>
          {weather && <p className='infoLocation'>{weather?.resolvedAddress}</p>  }
          {weather && <p className='infoTemperature'><b>{weather?.currentConditions.temp} °C</b></p> }
          {weather && <p className='infoDesc'><i>{weather?.currentConditions.conditions}</i></p> }
          <div className='wDataSecondary'>
            {weather &&
            <div>
              <p className='infoFeelsLike'>{weather.currentConditions.feelslike } °C</p>
              Feels Like
            </div>
            }  
            
            {weather &&
            <div>
              <p className='infoHumidity'>{weather.currentConditions.humidity} </p>
             Humidity              
            </div> 
            }

            {weather &&
             <div>
               <p className='infoWindSpeed'>{weather.currentConditions.windspeed} kph</p>
               Wind Speed
            </div> 
            }
           </div>
         </div>
        </div>
    </div>
  );
}

export default App;
