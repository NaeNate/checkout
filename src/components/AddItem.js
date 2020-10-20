import React from "react";

export default class AddItem extends React.Component {
  state = {
    error: undefined,
  };
  handleAddItem = (e) => {
    e.preventDefault();

    const goodsName = e.target.elements.goodsName.value;
    const price = e.target.elements.price.value;

    const goods = {
      goodsName,
      price,
    };

    const error = this.props.handleAddItem(goods);

    this.setState(() => ({ error }));

    if (error == undefined) {
      e.target.elements.goodsName.value = "";
      e.target.elements.price.value = "";
    }

    
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form autoComplete="off" autoFocus="on" onSubmit={this.handleAddItem}>
          <input placeholder="Item" name="goodsName" id="ItemNameInput"></input>
          <input placeholder="Price" name="price" id="ItemPriceInput"></input>
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

// regex for price ^\d{1,}(\.\d{0,2})?$
