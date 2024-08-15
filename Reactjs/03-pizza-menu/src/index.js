import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setHour(new Date().getHours());
    }, 1000);
  });

  return (
    <div>
      <Header />
      <Menu />
      <Footer current={time} hour={hour} />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      {props.current} We're currently 
      {props.hour > 7 && props.hour < 21 ? "open" : "closed"}!
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="focaccia" />
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
