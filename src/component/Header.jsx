import { NavLink, Outlet } from "react-router-dom"
import { FaLink } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { FiLink } from "react-icons/fi";



function Header() {
  return (
    <div>
      <div className="header-component" >
        <header>
          <NavLink to='/' className='logo'><BsLink style={{ borderRadius: '4px', fontSize: '25px', padding: '0 3px', color: '#fff', background: 'purple' }}></BsLink>devlinks</NavLink>
          <nav>
            <NavLink to='/profile' className={({ isActive }) => isActive ? 'activeStyle' : null} ><RxAvatar></RxAvatar>Profile</NavLink>
            <NavLink to='/link' className={({ isActive }) => isActive ? 'activeStyle' : null} ><FiLink></FiLink>Links</NavLink>
            <NavLink to='/interface' style={{ border: '1px solid #7071e8', color: '#7071e8', padding: '2px 10px', borderRadius: '4px' }} >Preview</NavLink>
          </nav>
        </header>
      </div>
      <Outlet />
    </div>
  )
}

export default Header
