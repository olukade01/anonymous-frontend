import { useState } from "react"

const useField = (type, placeholder) => {
  const [value, setValue] = useState('')
  const onChange = ({target}) => setValue(target.value)
  // const reset = () => setValue('')
  return{
    value, onChange, 
    // reset,
     type, placeholder
  }
} 

export default useField