import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";

function App() {
  const [quotes, setQuotes] = useState(quote);
  // Send the request
  const getQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuotes(data);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={() => getQuotes()}>
        Get a random quote
      </button>
      <div>
        {quotes.map((item) => (
          <QuoteCard
            image={item.image}
            quote={item.quote}
            character={item.character}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
const quote = [
  {
    quote:
      "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
    character: "Comic Book Guy",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
    characterDirection: "Right",
  },
];
