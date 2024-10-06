export default function Item({ item, onDeleteItems, handleCheckbox }) {
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