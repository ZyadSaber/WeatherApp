import {memo, useCallback} from 'react';

interface MessageProps {
setMessage: Function;
}

const Message = ({setMessage}: MessageProps) => {

    return(
        <div className='msg'>
            <h1>Please Make sure that the city is correct</h1>
            <button onClick={useCallback( () => {setMessage(false)},[setMessage])}>Got It</button>
        </div>
    )
} 

export default memo(Message)