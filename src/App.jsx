import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Profile from './component/Profile'
import Interface from './component/Interface'
import Home from './component/Home'
import Linkpage from './component/Linkpage'
import Footer from './component/Footer'


// import SharedRoute from './component/SharedRoute'
let getLocalStorage = () => {
  let userDetails = localStorage.getItem('user-details')
  if (userDetails) {
    return (userDetails = JSON.parse(localStorage.getItem('user-details')))
  } else {
    return []
  }
}

let getLink = () => {
  let links = localStorage.getItem('user-links')
  if (links) {
    return (links = JSON.parse(localStorage.getItem('user-links')))
  } else {
    return []
  }
}

function App() {

  let [userDetails, setUserDetails] = useState(getLocalStorage())
  const [image, setImage] = useState(null)
  let [firstName, setfirstName] = useState('')
  let [secondName, setsecondName] = useState('')
  let [email, setEmail] = useState('')

  let [links, setLinks] = useState(getLink())
  let [githubUrl, setGithubUrl] = useState('')
  let [linkedinUrl, setLinkeUrl] = useState('')
  let [twitterUrl, setTwitterUrl] = useState('')
  let [youtubeUrl, setYoutubeUrl] = useState('')
  let [devtoUrl, setDevtoUrl] = useState('')

  let [platform, setPlatform] = useState('')
  let [platformUrl, setPlatformUrl] = useState('')

  let [edit, setEdit] = useState(false)
  let [editId, setEditId] = useState(null)

  useEffect(() => {
    localStorage.setItem('user-details', JSON.stringify(userDetails))
    localStorage.setItem('user-links', JSON.stringify(links))
  }, [userDetails, links])


  return (
    <>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />

            <Route path='profile' element={<Profile firstName={firstName} setfirstName={setfirstName} secondName={secondName}
              setsecondName={setsecondName} email={email} setEmail={setEmail} userDetails={userDetails}
              setUserDetails={setUserDetails} image={image} setImage={setImage} edit={edit} setEdit={setEdit} editId={editId} setEditId={setEditId} />} />

            <Route path='link' element={<Linkpage setLinks={setLinks} links={links} githubUrl={githubUrl} setGithubUrl={setGithubUrl}
              linkedinUrl={linkedinUrl} setLinkeUrl={setLinkeUrl} setTwitterUrl={setTwitterUrl} twitterUrl={twitterUrl}
              youtubeUrl={youtubeUrl} setYoutubeUrl={setYoutubeUrl} devtoUrl={devtoUrl} setDevtoUrl={setDevtoUrl}
              platform={platform} setPlatform={setPlatform} platformUrl={platformUrl} setPlatformUrl={setPlatformUrl} />}
            />

          </Route>
          <Route path='interface' element={<Interface userDetails={userDetails} links={links}
            setLinks={setLinks} setEditId={setEditId} setEdit={setEdit} setEmail={setEmail}
            setfirstName={setfirstName} setsecondName={setsecondName} firstName={firstName} secondName={secondName} email={email} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
