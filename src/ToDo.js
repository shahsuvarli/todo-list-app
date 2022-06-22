import { Component, createRef } from "react";
import Item from "./Item";

class ToDo extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.newItem = createRef();
    this.state = {
      toDoList: [],
      id: 0,
    };
  }
  addItem() {
    let newToDoList = [
      ...this.state.toDoList,
      {
        id: this.state.id + 1,
        text: this.newItem.current.value,
        isEdit: false,
      },
    ];
    this.newItem.current.value = "";
    this.setState({ id: this.state.id + 1, toDoList: newToDoList });
  }
  deleteItem(itemId) {
    let newToDoList = this.state.toDoList.filter((item) => item.id !== itemId);
    this.setState({ toDoList: newToDoList });
  }
  editItem(itemId) {
    let objIndex = this.state.toDoList.findIndex((item) => item.id === itemId);
    this.state.toDoList[objIndex].isEdit = true;
    this.setState({ toDoList: this.state.toDoList });
  }
  saveItem(newValue, itemId) {
    let objIndex = this.state.toDoList.findIndex((item) => item.id === itemId);
    this.state.toDoList[objIndex].isEdit = false;
    this.state.toDoList[objIndex].text = newValue;
    this.setState({ toDoList: this.state.toDoList });
  }
  render() {
    return (
      <div className="main">
        <div className="header-container">
          <h1>Todo List!</h1>
          <h3>A Simple React Todo List App</h3>
          <hr />
        </div>
        <div className="to-do-list">
          {this.state.toDoList.map((item, index) => {
            return (
              <Item
                key={item.id}
                item={item}
                index={index}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                saveItem={this.saveItem}
                isEdit={this.isEdit}
              />
            );
          })}
        </div>
        <div className="add-item-container">
          <h2>New Todo</h2>
          <div className="add-item-content">
            <input
              placeholder="New Todo"
              type="text"
              ref={this.newItem}
              className="add-input"
            />
            <button onClick={this.addItem} className="add-button">
              ADD TODO
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDo;
