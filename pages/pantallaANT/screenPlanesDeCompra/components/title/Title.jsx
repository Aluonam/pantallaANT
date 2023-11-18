import React from 'react'
import styleTitle from './Title.module.css'

const Title = ({titleValue}) => {
  return (
    <div className={styleTitle.title}>
      <h2 className={styleTitle.title_h2}>{titleValue}</h2>
    </div>
    
  )
}

export default Title