import "./MailList.css"

const MailList = () => {
  return (
    <div className="mailList">
      <h1 className="mailListTitle">Savetimes, save money!</h1>
      <span className="mailListDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailListInputContainer">
         <input type="text" placeholder="You Email"/>
         <button>Subcribe</button>
      </div>
    </div>
  )
}

export default MailList