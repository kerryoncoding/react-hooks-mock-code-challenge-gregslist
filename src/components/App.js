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

 function handleUpdatedItems(UpdatedItems){
  console.log("update here", UpdatedItems)
  setDataList(UpdatedItems)
 }

 function refineSearch(input){
  console.log("top:", input)
  let refinedArr = dataList.filter((item) => item.description.toLowerCase().includes(input.toLowerCase()))
  setDataList(refinedArr)
 }

  return (
    <div className="app">
      <Header refineSearch={refineSearch}/>
      <ListingsContainer data={dataList} handleUpdatedItems={handleUpdatedItems} />
    </div>
  );
}

export default App;
