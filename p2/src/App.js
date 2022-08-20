// import logo from './logo.svg';
import "./App.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div>
      {/* <h1>Hello From App.js</h1> */}
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
