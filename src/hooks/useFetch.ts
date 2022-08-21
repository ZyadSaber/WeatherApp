import { useState, useEffect } from "react";

const useFetch = (url : string) => {
    const [data, setData] = useState([]);
    const detData=async(link: string)=>{
    const response=await fetch(link);
    const blogData=await response.json();
    setData(blogData)
  }
    useEffect(() => {
      detData(url)
      }, [url]);
      return{data, setData}
}

export default useFetch