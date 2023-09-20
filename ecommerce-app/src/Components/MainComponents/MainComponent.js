import React from "react";
import "./MainComponent.css";
import Filter from "../Filter/Filter";
import MainPageCard from "../MainPageCard/MainPageCard";
import { useState } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import { Routes, Route } from "react-router-dom";

export default function MainComponent(props) {
  const { productDatas, cellData} = props;

  return (
    <React.Fragment>
     
      <div className="mainComponentContainer">
   
        <MainPageCard
          {...props}
        />
      </div>
    </React.Fragment>
  );
}
