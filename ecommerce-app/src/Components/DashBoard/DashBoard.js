import React from 'react'

export default function DashBoard(props) {
     const{addProduct}=props
  return (
  <React.Fragment>
    {addProduct.map((s)=><div>{s.title}</div>)}
  </React.Fragment>
  )
}
