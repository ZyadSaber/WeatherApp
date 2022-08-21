import { useState, useEffect, useCallback } from "react";

const useFetch = (url : string) => {
    const [data, setData] = useState<{date: string, city: string, weather: string}[]>([{
    date: "",
    city:"",
    weather:"",
  }]);
   const [current, setCurrent] = useState({
    date: "",
    city:"",
    weather:"Please enter a city",
    condition:"",
  });
const [search, setSearch] = useState('');
const [localStorageSaveCHK, setLocalStorageSaveCHK] = useState<boolean>(false);

const getData = useCallback(async(link: string)=>{
    const response=await fetch(link);
    const weatherData=await response.json();  
    setCurrent({
    date: weatherData.location.localtime,
    city: weatherData.location.name,
    weather: weatherData.current.feelslike_c,
    condition: weatherData.current.condition.text
  })
  setData([...data, {
    date: weatherData.location.localtime,
    city:weatherData.location.name,
    weather: weatherData.current.feelslike_c,
  }]);
  setSearch("");
  setLocalStorageSaveCHK(true);
},[])


    useEffect(() => {
      getData(url)
      }, [url]);

      return{data, setData, current, search, setSearch, localStorageSaveCHK}
}

export default useFetch