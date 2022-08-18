import { memo } from 'react';

const HistoryList: any = ( {data, setData}: any ) => {
const itemToDelete = (itemDate: any) => {
    setData(data.filter((items: any) => items.date !== itemDate));
}
    const renderHistory = (): JSX.Element[] => {
        return data.map((item: any) => {
            return(
                <tr>
                    <td>{item.date}</td>
                    <td>{item.city}</td>
                    <td>{item.weather}</td>
                    <td><button onClick={() => {itemToDelete(item.date)}}>Delete</button></td>
                </tr>
            )
        })
    }

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
                {renderHistory()}
            </tbody>
        </table>
      </div>
    )
}

export default memo(HistoryList)