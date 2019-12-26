import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { connect } from 'react-redux';
import * as actions from './modules/action';
import './../public/index.css';

const mapStateToProps = (state) => {
  return { 
    items: state,
  }
};
const mapDispatchToProps = (dispatch) => {
  return { 
    addItem: (length, value) => dispatch(actions.createItem(length, value)),
    deleteItem: (id) => dispatch(actions.deleteItem(id)),
    markItem: (id) => dispatch(actions.markItem(id)),
    editItem: (id, val) => dispatch(actions.editItem(id, val)),
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  addItem = value => {
    let { addItem } = this.props;
    addItem(this.props.items.length, value)
    console.log('2', this.props.items.length)
  };
  deleteItem = id => {
    let { deleteItem } = this.props;
    deleteItem(id)
  };
  markItem = id => {
    let { markItem } = this.props;
    markItem(id)
  };
  editItem = (id, val) => {
    let { editItem } = this.props;
    editItem(id, val)
  };
  completedItems() {
    return this.props.items.filter(item => item.done).length
  }
  render() {

    return (
      <div id="main">
        <Header all={this.props.items.length} done={this.completedItems()} />
        <List
          items={this.props.items}
          editItem={this.editItem}
          markItem={this.markItem}
          deleteItem={this.deleteItem} />
        <Form addItem={this.addItem} />
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
