import { memo, useCallback } from 'react';

interface WeatherViewProps {
data:{date: string, city: string, weather: string}[] ,
setData: Function,
};

const HistoryList = ( {data, setData}: WeatherViewProps ) => {

const deleteItem = useCallback((itemDate: string) => {
    setData(data.filter((items: {date: string}) => items.date !== itemDate));
}, [data, setData]);

    return(
             <div className="history">
        <p>Search History</p>
        <table>
            <thead>
                <th>Date</th>
                <th>City</th>
                <th>Weather</th>
                <th>Action</th>
            </thead>
            <tbody>
                { data.map((item: {
                    date: string,
                    city: string,
                    weather: string
                }) => {
            return(
                <tr>
                    <td>{item.date}</td>
                    <td>{item.city}</td>
                    <td>{item.weather}</td>
                    <td><button onClick={() => {deleteItem(item.date)}}>Delete</button></td>
                </tr>
            )
        })}
            </tbody>
        </table>
      </div>
    )
};

export default memo(HistoryList);