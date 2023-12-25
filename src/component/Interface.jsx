import { Link } from "react-router-dom"


function Interface({ userDetails, setUserDetails }) {
  return (
    <div className="interface-con">
      <header>
        <Link to='/'><button>back</button></Link>
        <button>Share Link</button>
      </header>
      <h1>UNDER IMPLEMENTATION</h1>
      {userDetails.map((details) => {
        let { firstName, secondName, email, id, image } = details
        return (
          <div className='interface' key={id}>
            <div className='interface-content'>
              <img src={image} alt="" />
              <h2>{firstName} {secondName}</h2>
              {/* <h2>{secondName}</h2> */}
              <p>{email}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Interface
