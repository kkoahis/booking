import './FeaturedProperties.css'

const featuredProperties = () => {
   return (
      <div className='fp'>
         <div className="fpItem">
            <img src="http://du-lich.chudu24.com/f/m/2105/18/khach-san-movenpick-hanoi-1.jpg" alt="" className="fpImg" />
            <span className="fpName">Movenpick Hotel Ha Noi</span>
            <span className="fpCity">Ha Noi</span>
            <span className="fpPrice">Starting from 161,58 $</span>
            <div className="fpRating">
               <button>9.0</button>
               <span>Excellent</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://ticotravel.com.vn/wp-content/uploads/2021/08/Sunrise-Premium-Resort-Hoi-An-16.jpg" alt="" className="fpImg" />
            <span className="fpName">Sunrise Premium Resort Hoi An</span>
            <span className="fpCity">Quang Nam</span>
            <span className="fpPrice">Starting from 150,0 $</span>
            <div className="fpRating">
               <button>8.5</button>
               <span>Good</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/241837079.jpg?k=15fb770d021e848ae1bf0c95c81639785a3a5f58931c183bad896cbd809cb4cd&o=&hp=1" alt="" className="fpImg" />
            <span className="fpName">Hoi An Emerald Riverside Villas & Hotel</span>
            <span className="fpCity">Quang Nam</span>
            <span className="fpPrice">Starting from 50,6 $</span>
            <div className="fpRating">
               <button>8.5</button>
               <span>Good</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://static2.cafeland.vn/static01/sgd/news/2020/07/ban-can-ho-chung-cu-quan-1-tp-ho-chi-minh-1595336099-nhadat.cafeland.vn.jpg" alt="" className="fpImg" />
            <span className="fpName">Dimension Apartment Ho Chi Minh</span>
            <span className="fpCity">Ho Chi Minh</span>
            <span className="fpPrice">Starting from 103,8 $</span>
            <div className="fpRating">
               <button>8.7</button>
               <span>Good</span>
            </div>
         </div>
         <div className="fpItem">
            <img src="https://i.imgur.com/dCOnyqu.jpg" alt="" className="fpImg" />
            <span className="fpName">Mercure French Village Bana Hills</span>
            <span className="fpCity">Da Nang</span>
            <span className="fpPrice">Starting from 157,44 $</span>
            <div className="fpRating">
               <button>9.5</button>
               <span>Excellent</span>
            </div>
         </div>
      </div>
   )
}

export default featuredProperties