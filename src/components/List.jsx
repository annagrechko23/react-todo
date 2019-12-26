import React from "react";
import Item from "./Item";

function List(props) {
  return <ul className="list-group">{
    props.items.map(item => (
      <Item
        key={item.index}
        item={item}
        markItem={() => props.markItem(item.index)}
        deleteItem={() => props.deleteItem(item.index)}
        editItem={props.editItem}
      />
    ))
  }
  </ul>
}

export default List;
