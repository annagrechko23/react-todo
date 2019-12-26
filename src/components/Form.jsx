import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChange = event => {
    this.setState({value: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.value); 
    this.setState({
      value: ''
    });
  }
  render () {
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}> 
          <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" />
          <button type="submit" className="btn btn-default" >Add</button>
        </form>   
    );
  }
}

export default Form