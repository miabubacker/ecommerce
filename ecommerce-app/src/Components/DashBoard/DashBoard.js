import React from "react";
import "./DashBoard.css";

export default function DashBoard(props) {
  const { addProduct } = props;
  return (
    <div>
      {!addProduct ? (
        <div>emty in dashboard</div>
      ) : (
        <div>
          {addProduct?.map(
            (
              {
                title,
                category,
                thumbnail,
                price,
                rating,
                stock,
                description,
                brand,
                discountPercentage,
                id,
              },
              index
            ) => (
              <div className="dashboardMain">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div>{title}</div>
                    <div>{brand}</div>
                    <div>{category}</div>
                    <div>Price:{price}</div>
                    <div>Discount:{discountPercentage}%</div>
                  </div>
                  {/* <div><button onClick={()=>{selectProduct(index)}}>+ADD</button></div> */}
                </div>
                <div style={{ width: "13rem", height: "13rem" }}>
                  <img src={thumbnail} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
