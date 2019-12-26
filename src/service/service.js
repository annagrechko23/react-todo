import data from './../data';
;
let items = Object.keys(data).map(item => data[item]);
function getItems() {
  return items
}

function addItem(val) {
  if(val){
    items.push({
      "index": items.length + 1,
      "value": val,
      "done": false
    })
  }
}
function deleteItem(index) {
 items = items.filter(item => item.index !== index)
}
function markItem(index) {
  let todo = items.filter(item => item.index === index)
  todo[0].done = !todo[0].done;
}
function editItem(index, title) {
  items = items.map(item => {
    if(item.index === index){
      return Object.assign({},item, {"value": title});
    } else return item
  });
}
export default {
  getItems,
  addItem,
  markItem,
  editItem,
  deleteItem
};