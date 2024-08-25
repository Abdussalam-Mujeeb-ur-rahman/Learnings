import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer current={time} hour={hour} />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header>
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu(props) {
  const { pizzaData } = props;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizza-wrapper">
      {
        pizzaData && pizzaData.map((pizza, index) => {
          return (
            <Pizza
              key={index}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={`/${pizza.photoName}`}
              alt={pizza.name}
              soldOut={pizza.soldOut}
            />
          )
        })
      }
      </div>
    </main>
  );
}

function Pizza({img, alt, name, price, ingredients, soldOut}) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={img} alt={alt} />
      <div>
        <h3>{name}</h3>
        <p>price: {soldOut ? "SOLD OUT" : price}</p>
        <p>ingredients: {ingredients}</p>
      </div>
    </li>
  );
}

function Footer(props) {
  return (
    <footer className="footer">
      {props.current} We're currently{" "}
      {props.hour > 7 && props.hour < 21 ? "open" : "closed"}!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
