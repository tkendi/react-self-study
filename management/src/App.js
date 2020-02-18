import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동",
    birthday: "693322",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Lee",
    birthday: "152362",
    gender: "남자",
    job: "qudtls"
  }
];

function App() {
  return (
    <div>
      {customers.map(c => {
        return <Customer 
          key = {c.id}
          id = {c.id}
          image = {c.image}
          name = {c.name}
          birthday = {c.birthday}
          gender = {c.gender}
          job = {c.job}
        />;
      })}
    </div>
  );
}

export default App;
