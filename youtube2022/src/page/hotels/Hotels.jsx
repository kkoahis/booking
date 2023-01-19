import "./Hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotels = () => {
  const photos = [
    {
      src: "https://i.imgur.com/dCOnyqu.jpg"
    },
    {
      src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/50/2016/10/06034103/Resturant_Bars1.jpg"
    },
    {
      src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/50/2019/01/07164640/FV_XT2A6179_WEB-JPEG-sRGB-2048px.jpg"
    },
    {
      src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/50/2019/01/07164544/FV__T3A1978_WEB-JPEG-sRGB-2048px.jpg"
    },
    {
      src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/50/2019/08/05084259/Executive-Suites-Bedroom-Web.jpg"
    },
    {
      src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/50/2019/04/18142630/Deluxe-Twin-1-min.jpg"
    }
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Mercure French Village Bana Hills Hotels</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ba Na Hills - Da Nang</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 4km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWraper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelDetailsText__Title">About Hotels</h1>
              <p className="hotelDetailsText__Description">
                Welcome to Mercure Danang French Village Bana Hills, the most unique hotel in Vietnam. Located on top of Ba Na mountain, a famous entertainment complex in Vietnam and recently famous around the world. Through the image of the Golden Bridge, Mercure Danang French Village Bana Hills owns a majestic natural landscape and a great view of Da Nang city from an altitude of 1,487 meters above sea level.
                <br /><br />
                Inspired by the ancient villages of France, Mercure Danang French Village Bana Hills was designed in Gothic architecture in the 19th century. The beauty of the French hotel is reflected in the unique weather with 4 seasons in one day. The image of a picturesque French village among the clouds makes this the perfect choice for looking for a romantic getaway.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-nights stay</h1>
              <span>Locate in the Ba Na Hill, this property has an excellent location score of 9.5!</span>
              <h2>
                <b>$157,44</b> (7 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <div className="spectator"></div>
      <Footer />
    </div>
  )
}

export default Hotels