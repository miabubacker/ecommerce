import React from 'react'
import './Filter.css'
export default function Filter(props) {
   const{searchBox,setSearchInput}=props
  return (
    <React.Fragment>
    <div  className="filterConatiner">
    Filter:
    <div className="filterContainSelectBox">
      <div>Cathorgy:</div>
      <select>
      <option value="">Select an option</option>
      {/* {category.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))} */}
      </select>
    </div>
    <div className="filterContainSelectBox">
      <div>Brand:</div>
      <select>
      <option value="">Select an option</option>
      {/* {category.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))} */}
      </select>
    </div>
    <div><input type='text' onChange={(e)=>{searchBox(e.target.value)}} /></div>
  </div>
</React.Fragment>
  )
}

