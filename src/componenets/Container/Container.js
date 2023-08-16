import React from 'react'
import './Container.css'

function Container({center, children, scroll = true}) {
    console.log(`<Container /> rendered!`)
    let classNames = ['Container']
    if(center) {
      classNames.push('Container--center')
    }

    if(scroll){
      classNames.push('Container--scroll')
    }
  return (
    <div className={classNames.join(" ")}>{children}</div>
  )
}

export default Container