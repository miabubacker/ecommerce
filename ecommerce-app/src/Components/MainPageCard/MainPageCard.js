import React, { useState } from "react";
import "./MainPageCard.css";
import { Link, redirect } from "react-router-dom";
function MainPageCard(props) {
  const { productDatas, cellData,selectCrd ,setSelectCrd,setDefaultRange} = props;
  let category = cellData.map((s) => s.category);

  category = category.filter((v, i) => category.indexOf(v) === i);
  const imgs = [
    "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
    "https://m.media-amazon.com/images/I/61OAgQuiZzL._AC_UF1000,1000_QL80_.jpg",
    "https://s3.youthkiawaaz.com/wp-content/uploads/2023/04/03200544/13-best-cleansers.jpg",
    "https://qph.cf2.quoracdn.net/main-qimg-db7dd7afbad8b586e2a08373792d800d-lq",
    "https://media.designcafe.com/wp-content/uploads/2022/09/19152202/luxury-home-decor.jpg",
  ];
  const selectMainCard=(main,index)=>{
     let ap=[...cellData]
    let vs= ap.filter((s)=>s.category===main)
     setSelectCrd(vs)
     setDefaultRange(vs)
  }

  return (
    <React.Fragment>
      <div className="CardContainer">
        {category.map((s, index) => (
          <Link to="/Products">
   <div  key={index}className="cardMain" onClick={()=>selectMainCard(s,index)}>
           <div className="title"> {s}</div>
            <div style={{width:"13rem",height:"13rem"}}>
              <img src={imgs[index]} />
            </div>
            <div>see more</div>
          </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

export default MainPageCard;
