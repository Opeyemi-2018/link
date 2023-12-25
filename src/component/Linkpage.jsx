
import { HiMiniBars2 } from "react-icons/hi2";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TiSocialYoutube } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
// import { FaGithub, FaYoutube, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa';


function Linkpage() {
  return (
      <div>
        <div className="link-component">
          <div className="header">
              <h2 >Customize your links</h2>
              <p className="first-p">
                Add/edit/remove links below and thn share all your profiles with the world!  </p>
              <p className="second-p"> <TbBrandGithubFilled/> <FaLinkedin/> <FaTwitter/> +Add new link <BiLogoDevTo/> <TiSocialYoutube/> <FaFacebookSquare/> </p>
          </div>

          <form>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#1</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github">  Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#2</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github"> <TbBrandGithubFilled/> Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#3</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github"> <TbBrandGithubFilled/> Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#4</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github"> <TbBrandGithubFilled/> Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#5</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github"> <TbBrandGithubFilled/> Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <div className="form-div">
                <h4><HiMiniBars2/>Link#6</h4>
                <p style={{color: '#777',  fontSize: '13px', fontWeight: 'bold', color: '#b72522'}}>remove</p>
              </div>
              <div className="input-div">
                <div style={{marginBottom: '10px'}}>
                  <label>Platform</label>
                  <select className="select">
                      <option value="Github"> <TbBrandGithubFilled/> Github</option>
                      <option value="Youtube">Youtube</option>
                      <option value="LinKedin">LinKedin</option>
                      <option value="Twitter">Twitter</option>
                      <option value="DevTo">DevTo</option>
                  </select>
                </div>

                <div>
                  <label>Link</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="link-btn">
          <button >Save</button>
        </div>
      </div>
    )
}

export default Linkpage
