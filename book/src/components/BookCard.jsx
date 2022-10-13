import "./card.css";


export default function BookCard({img,title,year,author,price,alt}) {
  return (
    <div data-testid='book-card' className="cardDiv">
        <img src={img} alt={alt} 
          width="300px"
          height="400px"

        />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>Price: {price}Rs</div>
    </div>
  )
}

