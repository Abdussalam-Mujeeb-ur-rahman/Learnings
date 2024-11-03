import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function addFriend(input) {
    setFriends((friends) => [...friends, input]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={addFriend} />}
        <Button onClick={() => {
          setShowAddFriend(!showAddFriend)
          setSelectedFriend(null);
        }}>
          {
            !showAddFriend ? "Add Friend" : "Close"
          }
        </Button>

      </div>

      {
        selectedFriend && <FormSplitBill friend={selectedFriend} setFriends={setFriends} setSelectedFriend={setSelectedFriend} />
      }

    </div>
  )
}

function FriendList({ friends, onSelection, selectedFriend, setSelectedFriend }) {

  return <ul>
    {
      friends.map(friend => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />
      ))
    }
  </ul>
}

function Friend({ friend, onSelection, selectedFriend, setSelectedFriend }) {

  function handleSelection() {
    onSelection(friend)

    if (selectedFriend && selectedFriend.id === friend.id) {
      setSelectedFriend(null);
    }
  }

  return <li className={selectedFriend && friend.id !== selectedFriend.id ? "selected" : ""}>
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {
      friend.balance < 0 && (
        <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
      )
    }

    {
      friend.balance === 0 && (
        <p>You and {friend.name} are even</p>
      )
    }

    {
      friend.balance > 0 && (
        <p className="green">{friend.name} owes you ${friend.balance}</p>
      )
    }

    <Button onClick={handleSelection}>{selectedFriend && friend.id === selectedFriend.id ? "Close" : "Select"}</Button>
  </li>
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handlesubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    onAddFriend({
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    });

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return <form className="form-add-friend" onSubmit={handlesubmit}>
    <label>🧑‍🤝‍🧑name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required minLength={3} />

    <label>🖼️Image</label>
    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

    <Button>Add friend</Button>
  </form>
}

function FormSplitBill({ friend, setFriends, setSelectedFriend }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const friendExpense = Number(bill) - Number(yourExpense);
  const [payer, setPayer] = useState("You");

  function splitBill(e) {
    e.preventDefault();

    setFriends(friends => friends.map(f => f.id === friend.id ? { ...f, balance: (payer === "You") ? Number(friendExpense) + Number(f.balance) : Number(-yourExpense) + Number(f.balance) } : f));

    setSelectedFriend(null);
  }

  return <form className="form-split-bill" onSubmit={splitBill}>
    <h2>Split a bill with {friend.name}</h2>

    <label>💰Bill value</label>
    <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} />

    <label>👱Your expense</label>
    <input type="number" value={yourExpense} max={bill} onChange={(e) => setYourExpense(e.target.value)} />

    <label>🧑‍🤝‍🧑{friend.name}'s expense</label>
    <input type="number" disabled value={friendExpense} />

    <label>💸Who is paying the bill?</label>
    <select value={payer} onChange={(e) => setPayer(e.target.value)}>
      <option value="user">You</option>
      <option value="friend">{friend.name}</option>
    </select>

    <Button>Split bill</Button>
  </form>
}