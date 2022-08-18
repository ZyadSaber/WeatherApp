import {memo, useCallback} from 'react';

const Message = ({setMessage}: any) => {

    return(
        <div className='msg'>
            <h1>Please Make sure that the city is correct</h1>
            <button onClick={useCallback( () => {setMessage(false)},[setMessage])}>Got It</button>
        </div>
    )
} 

export default memo(Message)