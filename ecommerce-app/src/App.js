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
  const [productDatas, setProductDatas] = useState([]);
  const [cellData, setCellData] = useState([]);
  const [copydata, setCopydata] = useState({});
  const [addProduct, setAddProduct] = useState();
  const [selectCrd, setSelectCrd] = useState();
  const [priceFormat, setPriceFormat] = useState("");
  const [defaultRange, setDefaultRange] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [prod, setprod] = useState();
   const[copyrange,setCopyrange]=useState()

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => {
        let vs = json.products;
        setCellData(vs);
        setProductDatas(vs);
      });
  }, []);

  const selectProduct = (index) => {
    let ds = addProduct ? [...addProduct] : [];
    setAddProduct([...ds, selectCrd[index]]);
  };

  const sortPrice = (selectedFormat) => {
    setPriceFormat(selectedFormat);
  };
  useEffect(() => {
    let dss = [];
    if (priceFormat === "low-to-high") {
      const vs = [...(selectCrd || [])];
      dss = [...(vs || [])].sort((a, b) => a.price - b.price);
      setSelectCrd(dss);
      setCopyrange(dss)
    }
    if (priceFormat === "high-to-low") {
      const vs = [...(selectCrd || [])];
      dss = [...(vs || [])].sort((a, b) => b.price - a.price);
      setSelectCrd(dss);
      setCopyrange(dss)
    }

    if (priceFormat === "regular") {
      setSelectCrd(defaultRange);
       setCopyrange(defaultRange)
    }
  }, [priceFormat]);
  const searchBox = (value) => {
    setSearchInput(value);
  };
  useEffect(() => {
    const serach = searchInput.toLowerCase();
     const copyslect=selectCrd&&[...selectCrd]
    if (serach.length > 0) {
      const searchList = [...productDatas].filter((item) => {
        return (
          item.title.toLowerCase().indexOf(serach) !== -1 ||
          item.category.toLowerCase().indexOf(serach) !== -1
        );
      });
      const slectedsearch =selectCrd &&
        [...selectCrd].filter((item) => {
          return (
            item.title.toLowerCase().indexOf(serach) !== -1 ||
            item.category.toLowerCase().indexOf(serach) !== -1
          );
        });

      setCellData(searchList);
      setprod(searchList);
      setSelectCrd(slectedsearch);
    } else {
      setCellData(productDatas);
      setprod();
      copyrange?setSelectCrd(copyrange):setSelectCrd(defaultRange)

    }
  }, [searchInput]);
   console.log(selectCrd)
    console.log(copyrange)
  return (
    <>
      <Header
        productDatas={productDatas}
        cellData={cellData}
        addProduct={addProduct}
        searchBox={searchBox}
      />
      <Filter
        productDatas={productDatas}
        cellData={cellData}
        addProduct={addProduct}
        searchBox={searchBox}
        setSearchInput={setSearchInput}
      />
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
              prod={prod}
              selectProduct={selectProduct}
            />
          }
        />
        <Route
          path="/Products"
          element={
            <Products
              selectCrd={selectCrd}
              addProduct={addProduct}
              setAddProduct={setAddProduct}
              selectProduct={selectProduct}
              priceFormat={priceFormat}
              setPriceFormat={setPriceFormat}
              sortPrice={sortPrice}
              searchInput={searchInput}
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
