import React from 'react'
import './Header.css'
function Header() {
  return (
<React.Fragment>
    <div style={{background:'red'}}>
    <div className='HeaderMainContainer'>
    <div>Logo</div>
    <div className='navCenter'>
    <div>product</div>
    <div>terms</div>
    <div>condition</div>
    <div>vasp</div>
    </div>
    <div><button>LOOBE</button></div>
    </div>
    </div>
</React.Fragment>
  )
}

export default Header