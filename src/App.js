import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import Service from './service/service';
import './../public/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Service.getItems(),
    }
  }
  addItem = val => {
    Service.addItem(val);
    this.setState({ items: Service.getItems() })
  };
  deleteItem = id => {
    Service.deleteItem(id);
    this.setState({ items: Service.getItems() })
  };
  markItem = id => {
    Service.markItem(id);
    this.setState({ items: Service.getItems() })
  };
  editItem = (id, title) => {
    Service.editItem(id, title);
    this.setState({ items: Service.getItems() })
  };
  completedItems() {
    return this.state.items.filter(item => item.done).length
  }
  render() {

    return (
      <div id="main">
        <Header all={this.state.items.length} done={this.completedItems()} />
        <List

          items={this.state.items}
          editItem={this.editItem}
          markItem={this.markItem}
          deleteItem={this.deleteItem} />
        <Form addItem={this.addItem} />
      </div>

    );
  }
}

export default App;
