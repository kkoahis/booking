import "./propertyList.css"

const propertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
         <img src="https://vnn-imgs-f.vgcloud.vn/2020/10/08/15/khach-san-dat-vang-tuong-lai-u-am.jpg" alt="" className="propertyListImg" />
         <div className="propertyListTitles">
            <h1>Hotels</h1>
            <h2>804 hotels</h2>
         </div>
      </div>
      <div className="propertyListItem">
         <img src="https://khonggianviet.net/wp-content/uploads/2020/02/thiet-ke-noi-that-chung-cu-8-2-e1616943779174.png" alt="" className="propertyListImg" />
         <div className="propertyListTitles">
            <h1>Apartments</h1>
            <h2>631 apartments</h2>
         </div>
      </div>
      <div className="propertyListItem">
         <img src="https://dulichkhampha24.com/wp-content/uploads/2020/09/villa-hoi-an-co-ho-boi.jpg" alt="" className="propertyListImg" />
         <div className="propertyListTitles">
            <h1>Villas</h1>
            <h2>914 villas</h2>
         </div>
      </div>
      <div className="propertyListItem">
         <img src="https://www.chudu24.com/wp-content/uploads/2017/08/5-33.jpg" alt="" className="propertyListImg" />
         <div className="propertyListTitles">
            <h1>Resorts</h1>
            <h2>804 resorts</h2>
         </div>
      </div>
    </div>
  )
}

export default propertyList