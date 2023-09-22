import React from "react";
import "./MainComponent.css";
import Filter from "../Filter/Filter";
import MainPageCard from "../MainPageCard/MainPageCard";
import { useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";

export default function MainComponent(props) {
  const { productDatas, cellData,prod,selectProduct} = props;
   console.log(prod)
  return (
    <React.Fragment>
     {prod?.map((s,index)=><div>{s.title}<div style={{width:'20px',height:"20px"}}><img src={s.thumbnail}/></div><div><button onClick={()=>{selectProduct(index)}}>Add</button></div></div>)}
     {!prod&&
      <div className="mainComponentContainer">
        <MainPageCard
          {...props}
        />
      </div>
}
    </React.Fragment>
  );
}
