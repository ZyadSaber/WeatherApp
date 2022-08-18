import {memo} from 'react';

const ErrorMessage = ({setError, get_data, url}: any) => {

    return(
        <div className='msg'>
            <h1>the city you enter is too short do you to continue or edit</h1>
            <button onClick={() => {
                get_data(url)
                setError(false)
            }}>Continue</button>
            <button onClick={() => {setError(false)}}>Edit</button>
        </div>
    )
} 

export default memo(ErrorMessage)