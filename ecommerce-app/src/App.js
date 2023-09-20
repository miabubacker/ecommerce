import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponents/MainComponent';
import Header from './Components/Header/Header';
import { useEffect ,useState} from 'react';

function App() {
  const [productDatas, setProductDatas] = useState({});
  const [cellData, setCellData] = useState([]);
  const [copydata, setCopydata] = useState({});
  const [addProduct, setAddProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => {
        let vs = json.products;
        setCellData(vs);
        setProductDatas(json);
      });
  }, []);
  return (
    <>
<Header productDatas={productDatas} cellData={cellData} />
<MainComponent productDatas={productDatas} cellData={cellData}/>
    </>
  );
}

export default App;
