import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { data } from "./components/data";
// console.log(data);

function App() {
  const newcarddata = data.map((item) => {
    console.log(item);
    return (
      <Cards
        key={item.id}
        {...item}
      />
    );
  });
  // console.log(newcarddata);

  return (
    <div className="App">
      <header className="App-header container">
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <section className="card--container">{newcarddata}</section>
    </div>
  );
}

export default App;
