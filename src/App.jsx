import "./App.css";
import Cards from "./Cards";
import Info from "./info";
function App() {
  return (
    <div className="App">
      {Info.map((card, key) => {
        return (
          <Cards
            img={card.img}
            title={card.title}
            lyrics={card.lyrics}
            description={card.description}
          />
        );
      })}
    </div>
  );
}

export default App;
