import { useState } from "react";
import "../index.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";

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

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItem}
        handleChangeItemStatus={handleChangeItemStatus}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
