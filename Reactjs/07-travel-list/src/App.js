import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Glasses", quantity: 3, packed: false },
];


const App = () => {
  return (
    <div className="app">
      <Header />
      <Form />
      <List items={initialItems} />
      <Stats />
    </div>
  );
};

function Header() {
  return <h1>TravelNow 🚇</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
  }

  function handleClick() {
    alert(`description: ${description}, quantity: ${quantity}`)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what are you taking with you?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
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
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}

function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>🗙</button>
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
