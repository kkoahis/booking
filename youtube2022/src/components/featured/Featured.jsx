import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
         <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg" alt="" className="featuredImg" />
         <div className="featuredTitles">
            <h1>Quang Nam</h1>
            <h2>53 properties</h2>
         </div>
      </div>
      <div className="featuredItem">
         <img src="https://dulichfun.com/wp-content/uploads/2019/06/Kinh-nghiem-du-lich-Ba-Na-Hill-06.jpg" alt="" className="featuredImg" />
         <div className="featuredTitles">
            <h1>Da Nang</h1>
            <h2>120 properties</h2>
         </div>
      </div>
      <div className="featuredItem">
         <img src="https://file3.qdnd.vn/data/images/0/2022/10/09/phucthang/hanoi%201.jpg?dpi=150&quality=100&w=870" alt="" className="featuredImg" />
         <div className="featuredTitles">
            <h1>Ha Noi</h1>
            <h2>169 properties</h2>
         </div>
      </div>
      <div className="featuredItem">
         <img src="https://www.tapchikientruc.com.vn/wp-content/uploads/2019/03/19A03054.jpg" alt="" className="featuredImg" />
         <div className="featuredTitles">
            <h1>Ho Chi Minh</h1>
            <h2>132 properties</h2>
         </div>
      </div>
    </div>
  )
}

export default Featured