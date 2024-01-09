import React from "react";
import "./NewCollection.css";
import Item from "../Assets/Item/Item";

import new_collection from "../Assets/Assets/new_collections";
const NewCollection = () => {
  return (
    <div className="new-collection">
      <br />
      <br />
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
