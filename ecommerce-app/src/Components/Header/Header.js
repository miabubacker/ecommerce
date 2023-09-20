import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
  return (
<React.Fragment>
    <div className='headerParent'>
    <div className='HeaderMainContainer'>
    <div>Logo</div>
    <div className='navCenter'>
    <div>product</div>
    <div>terms</div>
    <div>condition</div>
    <div>vasp</div>
    </div>
    <div>
    <Link to="Dashboard">
      <button>LOOBE</button>
      </Link>
      </div>
    </div>
    </div>
</React.Fragment>
  )
}

export default Header