import fictiondata from "../fiction.json";
import BookCard from "./BookCard";
import "./card.css";

export default function Fiction({ title }) {

  return (
    <div data-testid="books-fiction" className="fictionDiv">
      <h1 data-testid="books-container-title">{title}</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {fictiondata.map((el) => (
          <div key={el.id}>
          <BookCard
             img={el.img}
             title={el.title}
             author={el.author}
             year={el.year}
             price={el.price}
             alt='image-pic'
             />
          </div>
        ))}
      </div>
    </div>
  );
}
