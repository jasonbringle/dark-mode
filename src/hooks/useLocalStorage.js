

function useLocalStorage(){
    const [storedValue, setStoredValue]= useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
    })

}