import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Linkpage from './component/Linkpage'
import Profile from './component/Profile'
import Interface from './component/Interface'
import Home from './component/Home'
import Footer from './component/Footer'


// import SharedRoute from './component/SharedRoute'


function App() {

  let [userDetails, setUserDetails] = useState([])
  const [image, setImage] = useState(null)
  let [firstName, setfirstName] = useState('')
  let [secondName, setsecondName] = useState('')
  // let [pic, setPic] = useState('')
  let [email, setEmail] = useState('')

  return (
    <div>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile firstName={firstName} setfirstName={setfirstName} secondName={secondName}
              setsecondName={setsecondName} email={email} setEmail={setEmail} userDetails={userDetails}
              setUserDetails={setUserDetails} image={image} setImage={setImage} />} />
            <Route path='link' element={<Linkpage />} />
          </Route>
          <Route path='interface' element={<Interface userDetails={userDetails} setUserDetails={setUserDetails} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
