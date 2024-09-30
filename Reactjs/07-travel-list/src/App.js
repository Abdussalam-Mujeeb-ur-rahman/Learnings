import { useState } from "react";
import "./index.css";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    let currItems = [...items, item];
    setItems(currItems);
  }

  function handleDeleteItem(itemId) {
    let currItems = items.filter((item) => item.id !== itemId);
    setItems(currItems);
  }

  function handleChangeItemStatus(itemId, status) {
    let currItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: status } : item
    );

    setItems(currItems);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItem}
        handleChangeItemStatus={handleChangeItemStatus}
      />
      <Stats />
    </div>
  );
};

function Header() {
  return <h1>TravelNow 🚇</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what are you taking with you?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val, key) => {
          return (
            <option value={val} key={key}>
              {val}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function List({ items, onDeleteItems, handleChangeItemStatus }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            handleCheckbox={handleChangeItemStatus}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, handleCheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        name="checkbox"
        defaultChecked={item.packed}
        onChange={(e) => handleCheckbox(item.id, e.target.checked)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>🗙</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="stats">
      <em>
        <small>
          You have x items on your list, and you have already packed x items
        </small>
      </em>
    </div>
  );
}

export default App;
