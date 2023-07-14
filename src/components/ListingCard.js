import React, {useState} from "react";

function ListingCard({image, description, location, id, updateDeletedList }) {

  const [isLiked, setIsLiked] = useState(true)
 
  function handleLike(){
    setIsLiked(!isLiked) 
  }


  //I AM HERE>.. need to handle delete better
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(resp=> resp.json())
    .then(item => updateDeletedList(item))
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {(isLiked) ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
