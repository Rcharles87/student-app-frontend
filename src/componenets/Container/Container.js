import React from 'react'
import './Container.css'

function Container({center, children}) {
    console.log(`<Container /> rendered!`)
    let classNames = ['Container']
    if(center) {
      classNames.push('Container--center')
    }
  return (
    <div className={classNames.join(" ")}>{children}</div>
  )
}

export default Container