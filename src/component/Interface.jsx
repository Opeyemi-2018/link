import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import { IoShareSocial } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { BiLogoDevTo } from "react-icons/bi";

function Interface({ userDetails, links, setLinks, setEditId, setEdit,
  setfirstName, setsecondName, setEmail, firstName, secondName, email }) {

  let editProfile = () => {
    // let editUserDetails = userDetails.find((item) => item.id === id)
    setEdit(true)
    // setEditId(id)
    setfirstName(firstName)
    setsecondName(secondName)
    setEmail(email)
  }

  let deleteLink = () => {
    setLinks([]);
  }

  return (
    <div className="interface-con">

      {userDetails.length === 0 ? (
        <div className="no-link">
          <div className="no-link-content">
            <h1>no profile created</h1>
            <FaRegEdit className="fill"></FaRegEdit>
            <Link to='/profile' relative="path"><button>Create Profile</button></Link>

          </div>
        </div>
      ) : (
        <>
          <header>
            <Link to="/profile"><FaArrowLeftLong className="back"></FaArrowLeftLong></Link>
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link to='/profile'><button onClick={editProfile} style={{ background: '#000' }}>
                <FaRegEdit /></button>
              </Link>
              {links.length > 0 && (<div> <button style={{ background: '#b72522' }} onClick={deleteLink}><RiDeleteBin6Line></RiDeleteBin6Line> <FiLink /></button></div>
              )}
              {links.length > 0 && (
                <div> <button>Share <IoShareSocial></IoShareSocial></button></div>)}
            </div>
          </header>
          {userDetails.map((details) => {
            let { firstName, secondName, email, id, image } = details;
            return (
              <div className="interface">
                <div key={id} className="interface-content">
                  <img src={image} alt="" />
                  <h2>{firstName} {secondName}</h2>
                  <p>{email}</p>
                </div>
                <div>
                  <ul className="links">
                    {links.map((link) => {
                      let { id, githubUrl, linkedinUrl, twitterUrl, youtubeUrl, devtoUrl, platform, platformUrl } = link;
                      return (
                        <div key={id}>
                          {githubUrl && (
                            <li key={id}><a href={githubUrl}> <TbBrandGithubFilled /><p>GitHub</p> <FaArrowRightLong /> </a></li>
                          )}
                          {linkedinUrl && (
                            <li key={id}><a className="second-a" href={linkedinUrl}> <FaLinkedin /><p>linkedin</p> <FaArrowRightLong /></a></li>
                          )}
                          {twitterUrl && (
                            <li key={id}><a className="third-a" href={twitterUrl}> <FaTwitter /><p>X</p> <FaArrowRightLong /></a></li>
                          )}
                          {youtubeUrl && (
                            <li key={id}><a className="fouth-a" href={youtubeUrl}> <TiSocialYoutube /><p>YouTube</p> <FaArrowRightLong /></a></li>
                          )}

                          {devtoUrl && (
                            <li key={id}><a className="" href={devtoUrl}> <BiLogoDevTo /><p>dev.to</p> <FaArrowRightLong /></a></li>
                          )}

                          {platformUrl && (
                            <li key={id}><a className="" href={platformUrl}><p>{platform}</p> <FaArrowRightLong /></a></li>
                          )}

                        </div>
                      )
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

        </>
      )}
    </div>
  );
}

export default Interface;
