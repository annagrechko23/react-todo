import React, { Component } from "react";
import FaPencil from "react-icons/lib/fa/pencil";
import FaCheck from "react-icons/lib/fa/check";
import EditForm from "./EditForm";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  showEdit = () => {
    this.setState({ editing: true });
  };
  hideEdit = () => {
    this.setState({ editing: false });
  };
  render() {
    return (
      <div>
        {!this.state.editing && (
          <li className="list-group-item ">
            <div
              className={this.props.item.done ? "done" : "undone"}
              onClick={this.props.markItem}
            >
              <span>
                <FaCheck />
              </span>
              {this.props.item.value}
            </div>
            <div className="btn-wrap">
              <button type="button" className="edit" onClick={this.showEdit}>
                <FaPencil />
              </button>
              <button
                type="button"
                className="close"
                onClick={this.props.deleteItem}
              >
                &times;
              </button>
            </div>
          </li>
        )}
        {this.state.editing && (
          <EditForm
            index={this.props.item.index}
            hideEdit={this.hideEdit}
            editItem={this.props.editItem}
            item={this.props.item.value}
          />
        )}
      </div>
    );
  }
}

export default Item;
