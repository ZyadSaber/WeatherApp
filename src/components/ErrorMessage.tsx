import {memo, useCallback} from 'react';

interface ErrorMessageProps {
setError: Function;
getData: Function;
url: string;
}

const ErrorMessage = ({setError, getData, url}: ErrorMessageProps) => {

    const continueBtn = useCallback (() => {
                getData(url)
                setError(false)
            }, [getData, setError, url]);

            const edit = useCallback(() => {setError(false)}, [setError])

    return(
        <div className='msg'>
            <h1>the city you enter is too short do you to continue or edit</h1>
            <button onClick={continueBtn}>Continue</button>
            <button onClick={edit}>Edit</button>
        </div>
    )
} 

export default memo(ErrorMessage)