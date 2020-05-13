import React, { useState }from 'react'

export const useLocalStorage = (key, initalValue) => {
const [ storedValue, setStoredValue ] = useState(() => {
    const item = window.localStorage.getItem(key)
    item ? parse.JSON(item) : initialValue;      
    return [storedValue]
})

const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

}