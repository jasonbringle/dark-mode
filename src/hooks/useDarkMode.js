import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = () => {
    const [ value, setValue ] = useLocalStorage('enabled', false)
    useEffect(() => {
        let body = document.querySelector('body')
        if (value){
            body.classList.add('dark-mode');
        } else {body.classList.remove('dark-mode');
        }
    }, [value]);
    return [value, setValue];
}
export default useDarkMode;
