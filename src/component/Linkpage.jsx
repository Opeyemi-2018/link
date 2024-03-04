
import { HiMiniBars2 } from "react-icons/hi2";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import { useState } from "react";
// import { FaGithub, FaYoutube, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';


function Linkpage({ githubUrl, setGithubUrl, links, setLinks, setTwitterUrl, twitterUrl,
  linkedinUrl, setLinkeUrl, youtubeUrl, setYoutubeUrl, devtoUrl, setDevtoUrl,
  platformUrl, setPlatformUrl, platform, setPlatform }) {

  let [successfulMsg, setSuccessfulMsg] = useState('')

  let submitLink = (e) => {
    e.preventDefault()
    if (githubUrl || twitterUrl || linkedinUrl || devtoUrl || youtubeUrl) {
      setLinks([...links, {
        id: new Date().getTime().toString(), githubUrl: githubUrl, linkedinUrl: linkedinUrl, youtubeUrl: youtubeUrl,
        twitterUrl: twitterUrl, devtoUrl: devtoUrl, platformUrl: platformUrl, platform: platform
      }])
      setSuccessfulMsg('link submitted')
      timeOut()
    }

    setGithubUrl('')
    setTwitterUrl('')
    setLinkeUrl('')
    setDevtoUrl('')
    setYoutubeUrl('')
  }

  let timeOut = () => {
    setTimeout(() => {
      setSuccessfulMsg('')
    }, 3000)
  }
  return (
    <div>
      <div className="link-component">
        <div className="header">
          <h2 >Customize your links</h2>
          <p className="first-p">
            Add/edit/remove links below and thn share all your profiles with the world!  </p>
          <p className="second-p">+Add new link <BiLogoDevTo /> <TiSocialYoutube /> <TbBrandGithubFilled /> <FaLinkedin /> <FaTwitter /> </p>
        </div>
        <div className="msg-con">
          {successfulMsg && (<p className="link-su">{successfulMsg}</p>)}
        </div>
        <form onSubmit={submitLink}>
          <div className="form-con">

            {/* githurb*/}
            <div className="form-div">
              <h4><HiMiniBars2 />Link#1</h4>
              <div>
                <label><TbBrandGithubFilled style={{ marginRight: '7px' }} /> GitHurb</label>
                <input onChange={(e) => setGithubUrl(e.target.value)} value={githubUrl} placeholder="fill in the url to your github profile" />
              </div>
            </div>

            {/* linkedin*/}
            <div className="form-div">
              <h4><HiMiniBars2 />Link#2</h4>
              <div>
                <label><FaLinkedin style={{ marginRight: '7px' }} /> LinkedIn</label>
                <input onChange={(e) => setLinkeUrl(e.target.value)} value={linkedinUrl} placeholder="fill in the url to your linkedin profile" />
              </div>
            </div>

            {/* twitter*/}
            <div className="form-div">
              <h4><HiMiniBars2 />Link#3</h4>
              <div>
                <label><FaTwitter style={{ marginRight: '7px' }} /> X</label>
                <input onChange={(e) => setTwitterUrl(e.target.value)} value={twitterUrl} placeholder="fill in the url to your X profile" />
              </div>
            </div>

            {/* youtube*/}
            <div className="form-div">
              <h4><HiMiniBars2 />Link#4</h4>
              <div>
                <label><TiSocialYoutube style={{ marginRight: '7px' }} /> YouTube</label>
                <input onChange={(e) => setYoutubeUrl(e.target.value)} value={youtubeUrl} placeholder="fill in the url to your youtube profile" />
              </div>
            </div>

            {/* dev.to*/}
            <div className="form-div">
              <h4><HiMiniBars2 />Link#4</h4>
              <div>
                <label><BiLogoDevTo style={{ marginRight: '7px' }} /> dev.to</label>
                <input onChange={(e) => setDevtoUrl(e.target.value)} value={devtoUrl} placeholder="fill in the url to your dev.to profile" />
              </div>
            </div>

            <div className="platform-div">
              <div>
                <input onChange={(e) => setPlatform(e.target.value)} value={platform} placeholder="fill in your platform name" />
              </div>
              <div>
                <input onChange={(e) => setPlatformUrl(e.target.value)} value={platformUrl} placeholder="fill in the url to your platform profile" />
              </div>
            </div>
          </div>
          <div className="link-btn">
            <button type="submit" >Save</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Linkpage
