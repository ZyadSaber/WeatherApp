import {memo, useCallback} from 'react';

interface ErrorMessageProps {
setError: Function;
setCityName: Function;
search: string;
}

const ErrorMessage = ({setError, setCityName, search}: ErrorMessageProps) => {

    const continueBtn = useCallback (() => {
                setCityName(search)
                setError(false)
            }, [setCityName, search, setError]);

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