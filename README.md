# react-ts-memo

React.memo is a higher order component which prevents functional component being rerendered if its' props or state do not changed

Heading.tsx

```js
import React from 'react';

function Heading() {
  console.log('Rendering Heading');
  return <h2>React.memo Example</h2>;
}

export default React.memo(Heading);

//without React.memo
//export default Heading;
```

CartSummary.tsx

```js
import React from 'react';

function CartSummary({ field, value }) {
  console.log(`Rendering ${field}`);
  return (
    <div>
      Cart having {value} {field}
    </div>
  );
}

export default React.memo(CartSummary);

//without React.memo
//export default CartSummary;
```

Cart.tsx

```js
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
```

app.tsx

```js
import React from 'react';
import { Cart } from './components/Cart';

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;
```

