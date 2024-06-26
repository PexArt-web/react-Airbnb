const Cards = ({ title, coverImg, stats, location, price, openspot }) => {
  let badgeText;
  if (openspot === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--wrap">
        <img src={coverImg} alt="" className="card--img" />
        <div className="card--ratingCont p-2">
          <i className="bi bi-star-fill star--icon"></i>
          <p className="card--rating">{stats.rating}</p>
          <p className="card--count">({stats.reviewCount})</p>
          <p className="card--elipse6"></p>
          <p className="card--country">{location}</p>
        </div>
        <p className="card--title">{title}</p>
        <div className="card--price p-2">
          From ${price} <span className="card--price_person">/ person</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
