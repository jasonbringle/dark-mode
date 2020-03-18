import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);
  useEffect(() => {
    let bodyEl = document.querySelector('body');
    if (darkMode) {
      bodyEl.classList.add('dark-mode');
    } else {
      bodyEl.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
