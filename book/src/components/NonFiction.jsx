import nonfictionalData from "../nonfiction.json";
import BookCard from "./BookCard";
import "./card.css";



export default function NonFiction({ title }) {
  return (
    <div data-testid="books-nonfiction" className="fictionDiv">
      <h1 data-testid="books-container-title">{title}</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonfictionalData.map((ele) => (
          <div key={ele.id}>
          <BookCard
             img={ele.img}
             title={ele.title}
             author={ele.author}
             year={ele.year}
             price={ele.price}
             alt='image-pic'
             />
          </div>
        ))}
      </div>
    </div>
  );
}
