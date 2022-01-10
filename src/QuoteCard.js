import getQuotes from "./App";
const QuoteCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="" />
        <h2>{props.character}</h2>
        <p>{props.quote}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
