import "./List.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"


const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearch__Title">Search</h1>
            <div className="listSearch__Item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listSearch__Item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && (<DateRange
                onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date}
              />)}
            </div>
            <div className="listSearch__Item">
              <label>Options</label>
              <div className="listOption">

                <div className="listOptionItem">
                  <span className="listOptionItem__Text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionItem__input" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionItem__Text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionItem__input" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionItem__Text">
                    Adult
                  </span>
                  <input type="number" min={1} className="listOptionItem__input" placeholder={options.adult} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionItem__Text">
                    Children
                  </span>
                  <input type="number" min={0} className="listOptionItem__input" placeholder={options.children} />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionItem__Text">
                    Room
                  </span>
                  <input type="number" min={1} className="listOptionItem__input" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List