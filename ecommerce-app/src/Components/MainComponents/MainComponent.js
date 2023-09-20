import React from 'react'
import './MainComponent.css'
import Filter from '../Filter/Filter'
import MainPageCard from '../MainPageCard/MainPageCard'
import { useState } from 'react'

export default function MainComponent(props) {
     const{productDatas,cellData}=props
     const[selectCrd,setSelectCrd]=useState()
  return (
    <div className='mainComponentContainer'>
    <Filter/>
    <MainPageCard {...props} selectCrd={selectCrd}setSelectCrd={setSelectCrd}/>

</div>
  )
}

