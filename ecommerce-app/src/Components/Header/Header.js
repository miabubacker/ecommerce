import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header(props) {
   const{addProduct}=props
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
      <div style={{display:"flex",gap:'1.5rem',alignItems:"center"}}>
      <div className='dashboardCount'>{addProduct&&addProduct.length}</div>
      <button>Cart</button>
      </div>
      </Link>
      </div>
    </div>
    </div>
</React.Fragment>
  )
}

export default Header