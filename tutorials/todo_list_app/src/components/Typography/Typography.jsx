/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Typography({children,fontSize,bold,marginTop} ) {
  return (
    <div style={{ fontSize:fontSize, fontWeight: bold ? "500":"700" ,marginTop:marginTop}}>
      {children}
    </div>
  )
}

export default Typography
