import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data}) {
  console.log(data)

  let listings = data.map((item)=> {
    return( 
    <ListingCard
        key = {item.id}
        description= {item.description}
        image = {item.image}
        location = {item.location}
    />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listings}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
