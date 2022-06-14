import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'


const Form = ({handleClick}) => {
  const [countryName, setCountryName] = useState("")
  
  return (
    <form className="form-inline" onSubmit={(e)=>{handleClick(e,countryName);setCountryName('')}}>
  <div className="form-group mb-2">
    <label htmlFor="staticEmail2" className="sr-only">Choose country</label>
    <input type="text" style={{width: "300px"}} className="form-control" id="staticEmail2" palceholder="Choose country" value={countryName} onChange={(e)=>setCountryName(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary mb-2">Confirm </button>
</form>

  )
}

export default Form