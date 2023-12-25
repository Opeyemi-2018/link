import { Link } from 'react-router-dom'
import girl1 from '../assets/images/girl-1.png'
import girl2 from '../assets/images/girl-2.png'


function Home() {
    return (
        <div className='home'>
            <div className="home-content">
                <div className='img'>
                    <img src={girl2} alt="" />
                </div>
                <div className='home-text'>
                    <h2>Devlink is here to easily help you share your social media link with your friends and family</h2>
                    <Link to='/profile'><button>GET STARTED</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
