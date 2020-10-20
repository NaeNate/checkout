import React from "react";

const Goods = (props) => (
  <div>
    {props.goods.map((good) => (
      <button
        onClick={() => {
          props.handleAddTotal(good.price)}
        }
        key={good.goodsName}>
        {good.goodsName}
        <br />${good.price} 
      </button>
    ))}
  </div>
);

export default Goods