// import logo from './logo.svg';
import "./App.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import dataCard from "./dataCard";

function App() {
  const cards = dataCard.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div>
      {/* <h1>Hello From App.js</h1> */}
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
