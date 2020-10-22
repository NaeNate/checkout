import React from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import Goods from "./Goods";
import Total from "./Total";

export default class Checkout extends React.Component {
  state = {
    items: [],
    total: 0,
    removeState: false,
  };
  handleAddItem = (goods) => {
    const itemArray = this.state.items.map((item) => {
      return item.goodsName;
    });
    if (!/^\d{1,}\.\d{2}$/.test(parseFloat(goods.price))) {
      document.getElementById("ItemPriceInput").focus();
      return "Please enter a valid number.";
    } else if (itemArray.includes(goods.goodsName)) {
      document.getElementById("ItemNameInput").focus();
      return "Please use a unique name.";
    } else {
      this.setState((prevState) => ({
        items: prevState.items.concat(goods),
      }));
      document.getElementById("ItemNameInput").focus();
    }
  };
  handleAddTotal = (priceToAdd) => {
    if (this.state.removeState) {
      const itemIndex = this.state.items.indexOf(priceToAdd)
      const newArry = this.state.items
      newArry.splice(itemIndex, 1)

      this.setState(() => ({
        items: newArry
      }))
    } else {
      this.setState((prevState) => ({
        total: prevState.total + parseFloat(priceToAdd.price),
      }));
    }
  };
  handleChangeRemoveState = () => {
    this.setState((prevState) => ({
      removeState: !prevState.removeState,
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <AddItem
          handleAddItem={this.handleAddItem}
          removeState={this.state.removeState}
          handleChangeRemoveState={this.handleChangeRemoveState}
        />
        <Goods
          goods={this.state.items}
          handleAddTotal={this.handleAddTotal}
          removeState={this.state.removeState}
        />
        <Total total={this.state.total} />
      </div>
    );
  }
}