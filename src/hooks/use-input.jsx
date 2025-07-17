import { useState } from 'react'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null); // State error

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
    if (error) {
      setError(null); // Reset error saat user mengedit input
    }
  };

  const setErrorMsg = (msg) => {
    setError(msg); // Function buat set pesan error
  };

  return [value, onValueChangeHandler, error, setErrorMsg];
}

export default useInputValue;