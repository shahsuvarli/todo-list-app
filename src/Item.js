import { Component, createRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

class Item extends Component {
  constructor() {
    super();
    this.updatedItemRef = createRef();
  }
  render() {
    return (
      <div className="item-container">
        {this.props.item.isEdit ? (
          <div className="item">
            <input
              defaultValue={this.props.item.text}
              type="text"
              ref={this.updatedItemRef}
            />
            {/* <button onClick={() => this.props.saveItem(this.props.item.id)}> */}
            <button
              onClick={() =>
                this.props.saveItem(
                  this.updatedItemRef.current.value,
                  this.props.item.id
                )
              }
            >
              SAVE
            </button>
          </div>
        ) : (
          <div className="item">
            <div className="text">{this.props.item.text}</div>
            <div className="buttons">
              <AiFillEdit onClick={() => this.props.editItem(this.props.item.id)} />
              &nbsp;
              <BsFillTrashFill
                onClick={() => this.props.deleteItem(this.props.item.id)}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
