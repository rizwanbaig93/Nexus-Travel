import React,{useState} from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function CountryDropdown(){
  const [value, setValue] = useState()
  return(
    <div className='Call-Content'>
    <PhoneInput placeholder="Enter phone number" value={value}  defaultCountry="PK" onChange={setValue}/>
    </div>
  )
}
export default CountryDropdown;