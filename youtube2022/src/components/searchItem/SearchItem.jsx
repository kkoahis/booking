import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/241837079.jpg?k=15fb770d021e848ae1bf0c95c81639785a3a5f58931c183bad896cbd809cb4cd&o=&hp=1" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Village Hoi An</h1>
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