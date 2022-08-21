import {memo, useCallback} from 'react';

interface MessageProps {
setMessage: (value: boolean | ((prevMessage: boolean) => boolean)) => void;
}

const Message = ({setMessage}: MessageProps) => {

    const continueBtn = useCallback(() =>()=> {setMessage(false)}, [setMessage])

    return(
        <div className='msg'>
            <h1>Please Make sure that the city is correct</h1>
            <button onClick={continueBtn}>Got It</button>
        </div>
    )
} 

export default memo(Message)