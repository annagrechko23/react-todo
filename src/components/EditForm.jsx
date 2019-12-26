import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.item
    };
  }
  handleChange = event => {
    this.setState({value: event.target.value});
  }
  editItem = () =>{
    this.props.editItem(this.props.index, this.state.value);
    this.props.hideEdit()
  }
  render () {
    return(
      <form className="form-inline"> 
          <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" />
          <button type="button" className="btn btn-default" onClick={this.props.hideEdit}>Cancel</button>
          <button type="button" className="btn btn-default" 
           onClick={this.editItem} >Save</button>
        </form>   
    );
  }
}

export default EditForm