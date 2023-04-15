import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <input type='text' className='location' placeholder='Insert Location'></input>
        <button class='searchbtn'><i class="fa fa-search" aria-hidden="true"></i></button>
        <div className='notfound'>
          <p>Location Not found</p>
        </div>
        <div className='wDataPrimary'>
          <p className='infoLocation'>Trento, Trentino-Alto Adige</p>
          <p className='infoTemperature'>20 °C</p>
          <p className='infoDesc'>Overcast</p>
          <div className='wDataSecondary'>
            <div>
              <p className='infoFeelsLike'>25 °C</p>
              Feels Like
            </div>         
            <div>
              <p className='infoHumidity'>25 </p>
              Humidity              
            </div> 
            <div>
              <p className='infoWindSpeed'>25 kph</p>
              Wind Speed
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;