import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://pix10.agoda.net/hotelImages/6945065/-1/4d1b08ef0b5cb29261190d7bb08e2de9.jpg?ca=9&ce=1&s=1024x768" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Villa Hoi An</h1>
        <span className="siDistance">3 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          With city views, Hoi An Emerald Riverside Villas & Hotel is located in Hoi An and has a restaurant, a shared kitchen, bar, garden, year-round outdoor pool and terrace.
        </span>
        <span className="siFeatures">
          1 bathroom - 21 m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in the great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$35</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem