import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const users = [
  {
    name: "Abdussalam Mujeeb-ur-rahman",
    bio: "Backend web developer and educational psychologist. When not coding, I am creating and editing videos. I'm more inclined towards security and user experience.",
    links: [
      {
        label: "Github",
        url: "https://github.com/Abdussalam-Mujeeb-ur-rahman",
        color: "black",
      }, 
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        color: "blue",
      },
      {
        label: "twitter",
        url: "https://x.com/allahisrabb",
        color: "darkblue",
      }
    ],
    image: "images/profile.jpeg",
  },
];

function App() {
  return <Card />;
}

function Card() {
  return (
    <>
      {users.map((user, index) => {
        return (
          <div className="card">
            <ProfileImage image={user.image} />
            <Details name={user.name} bio={user.bio} />
            <Buttons links={user.links} />
          </div>
        );
      })}
      ;
    </>
  );
}

function ProfileImage(props) {
  return <img src={props.image} alt="profile" />;
}

function Details(props) {
  return (
    <div className="details">
      <h2>{props.name}</h2>
      <p>
        {props.bio}
      </p>
    </div>
  );
}

function Buttons(props) {
  return (
    <div className="links">
      {props.links.map((link, index) => {
        return (
          <Button
            key={index}
            label={link.label}
            url={link.url}
            color={link.color}
          />
        );
      })}
    </div>
  );
}

function Button(props) {
  return (
      <a
        href={props.url}
        style={{ backgroundColor: props.color }}
      >
        {props.label}
      </a>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
