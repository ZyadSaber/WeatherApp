import './style.css';
import {useState, useCallback, memo, useEffect} from 'react'
import HistoryList from './components/HistoryList';
import WeatherView from './components/WeatherView';
import Message from './components/Message';
import ErrorMessage from './components/ErrorMessage';


function App() {

  const [search, setSearch] = useState('')
  const url = 'http://api.weatherapi.com/v1/current.json?key=f7b3bf170e95461093b181641221508&q='+search+'&aqi=no'
  const [data, setData] = useState<{date: string, city: string, weather: string}[]>([{
    "date": "",
    "city":"",
    "weather":"",
  }]);
  const [message, setMessage] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState<boolean>(false);
  const [current, setCurrent] = useState({
    "date": "",
    "city":"",
    "weather":"Please enter a city",
    "condition":"",
  });
  const handleSearch = useCallback((event: {
    target:{
      value: string
    }
  }) => {
    setSearch(event.target.value)
  }, [setSearch])
const getData=async(link: string)=>{
    const response=await fetch(link);
    const weatherData=await response.json();  
    setCurrent({
    "date": weatherData.location.localtime,
    "city": weatherData.location.name,
    "weather": weatherData.current.feelslike_c,
    "condition": weatherData.current.condition.text
  })
  setData([...data, {
    "date": weatherData.location.localtime,
    "city":weatherData.location.name,
    "weather": weatherData.current.feelslike_c,
  }])
  setSearch("")
  setPost(true)
};

   const handleSearchButton = () => {
    if (search.length === 0) {
      setMessage(true)
      setError(false)
    }else if (search.length <= 3) {
      setError(true)
      setMessage(false)
    }else {
      getData(url)
    }
  };
  
  useEffect(()=>{
    window.localStorage.getItem('data') !== null ? setData(JSON.parse(localStorage.getItem('data') || "")) : setData([])
  },[])

    useEffect(() => {
      if (post === true) {localStorage.setItem('data', JSON.stringify(data))}
    }, [data, post, setData])


  return (
    <div className="App">
      <div className='message'>
      {message && <Message setMessage={setMessage}/>}
      {error && <ErrorMessage setError={setError} getData={getData} url={url}/>}
      </div>
      <div className="container">
      <h4>Weather App</h4>
      <div className="search">
        <input type="text" placeholder="Type a city" value={search} onChange={handleSearch}/>
        <button onClick={() => {handleSearchButton()}}>Search</button>
      </div>
      <WeatherView current={current} />
      <HistoryList setData={setData} data={data} />
    </div>
    </div>
  );
}

export default memo(App);