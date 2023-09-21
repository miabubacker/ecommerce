import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Components/MainComponents/MainComponent";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Filter from "./Components/Filter/Filter";
import DashBoard from "./Components/DashBoard/DashBoard";



function App() {
  const [productDatas, setProductDatas] = useState({});
  const [cellData, setCellData] = useState([]);
  const [copydata, setCopydata] = useState({});
  const [addProduct, setAddProduct] = useState();
  const [selectCrd, setSelectCrd] = useState();
  const [priceFormat, setPriceFormat] = useState("");
  const [defaultRange, setDefaultRange] = useState();


  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => {
        let vs = json.products;
        setCellData(vs);
        setProductDatas(json);
      });
  }, []);

  const selectProduct = (index) => {
    let ds=addProduct?[...addProduct]:[]
 setAddProduct( [...ds, selectCrd[index]]);
  };

  const sortPrice = (selectedFormat) => {
    setPriceFormat(selectedFormat);
  };
  useEffect(() => {
    let dss = [];
    if (priceFormat === "low-to-high") {
      const vs = [...selectCrd||[]];
      dss = [...(vs || [])].sort((a, b) => a.price - b.price);
      setSelectCrd(dss);
    }
    if (priceFormat === "high-to-low") {
      const vs = [...selectCrd||[]];
      dss = [...(vs || [])].sort((a, b) => b.price - a.price);
      setSelectCrd(dss);
    }

    if (priceFormat === "regular") {
      setSelectCrd(defaultRange);
    }
  }, [priceFormat]);

  return (
    <>
      <Header productDatas={productDatas} cellData={cellData} addProduct={addProduct} />
      <Filter />
      <Routes>
        <Route
          path="/"
          element={
            <MainComponent
              productDatas={productDatas}
              cellData={cellData}
              setSelectCrd={setSelectCrd}
              selectCrd={selectCrd}
              setDefaultRange={setDefaultRange}
            />
          }
        />
        <Route
          path="Products"
          element={
            <Products
              selectCrd={selectCrd}
              addProduct={addProduct}
              setAddProduct={setAddProduct}
              selectProduct={selectProduct}
              priceFormat={priceFormat}
              setPriceFormat={setPriceFormat}
              sortPrice={sortPrice}
            />
          }
        />
        <Route
          path="/Dashboard"
          element={<DashBoard addProduct={addProduct} />}
        />
      </Routes>
    </>
  );
}

export default App;
