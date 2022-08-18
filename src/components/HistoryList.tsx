import { memo, useCallback } from 'react';

const HistoryList: any = ( {data, setData}: any ) => {

const deleteItem = useCallback((itemDate: any) => {
    
    setData(data.filter((items: any) => items.date !== itemDate));
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
                { data.map((item: any) => {
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
}

export default memo(HistoryList)