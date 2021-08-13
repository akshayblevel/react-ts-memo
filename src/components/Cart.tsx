import React, { useState } from 'react';
import CartSummary from './CartSummary';
import Heading from './Heading';

export function Cart() {
  const [item, setItem] = useState(1);
  const [price, setPrice] = useState(100);

  const addItem = () => {
    setItem(item + 1);
  };

  const addPrice = () => {
    setPrice(price + 100);
  };

  return (
    <div>
      <Heading />
      <CartSummary field="Item" value={item} />
      <button onClick={addItem}>Add More Item</button>
      <hr />
      <CartSummary field="Price" value={price} />
      <button onClick={addPrice}>Add More Price</button>
    </div>
  );
}
