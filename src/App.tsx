import './style.css';
import {useState, useCallback, memo, useEffect} from 'react'
import HistoryList from './components/HistoryList';
import WeatherView from './components/WeatherView';
import Message from './components/Message';
import ErrorMessage from './components/ErrorMessage';
import useFetch from './hooks/useFetch';


function App() {
const [cityName, setCityName] = useState('');
  const url = 'http://api.weatherapi.com/v1/current.json?key=f7b3bf170e95461093b181641221508&q='+cityName+'&aqi=no';
  const {data, setData, current, search, setSearch, localStorageSaveCHK} = useFetch(url)
  const [error, setError] = useState<boolean>(false);
const [message, setMessage] = useState<boolean>(false);

  const handleSearch = useCallback((event: {target:{value: string}}) => {
    setSearch(event.target.value);
  }, [setSearch]);


  const handleSearchButton = useCallback(()=>{
    search.length === 0 ? setMessage(true) : search.length <= 3 ? setError(true) : setCityName(search)
  },[search])
  
  useEffect(()=>{
    window.localStorage.getItem('data') !== null ? setData(JSON.parse(localStorage.getItem('data') || "")) : setData([]);
  },[]);

    useEffect(() => {
      if (localStorageSaveCHK === true) {localStorage.setItem('data', JSON.stringify(data))};
    }, [data, localStorageSaveCHK, setData]);


  return (
    <div className="App">
      <div className='message'>
      {message && <Message setMessage={setMessage}/>}
      {error && <ErrorMessage setError={setError} setCityName={setCityName} search={search}/>}
      </div>
      <div className="container">
      <h4>Weather App</h4>
      <div className="search">
        <input type="text" placeholder="Type a city" value={search} onChange={handleSearch}/>
        <button onClick={handleSearchButton}>Search</button>
      </div>
      <WeatherView current={current} />
      <HistoryList setData={setData} data={data} />
    </div>
    </div>
  );
}

export default memo(App);