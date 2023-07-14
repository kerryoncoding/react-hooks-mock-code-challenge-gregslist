import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, handleUpdatedItems}) {
  console.log(data)

  let listings = data.map((item)=> {
    return( 
    <ListingCard
        key={item.id}
        id = {item.id}
        description= {item.description}
        image = {item.image}
        location = {item.location}
        updateDeletedList = {updateDeletedList}
    />
    )
  })

  function updateDeletedList(deletedItem){
    console.log(deletedItem)
   const updatedItems = data.filter((item)=> item.id !== deletedItem)
   handleUpdatedItems(updatedItems)
  }
  
  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
