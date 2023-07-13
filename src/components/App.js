import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [dataList, setDataList] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => {
      setDataList(data)
    })
  },[])




  return (
    <div className="app">
      <Header />
      <ListingsContainer data={dataList} />
    </div>
  );
}

export default App;
