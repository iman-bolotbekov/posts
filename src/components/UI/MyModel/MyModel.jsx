import { RiCloseFill } from 'react-icons/ri'
import React from 'react'
import cl from './MyModel.module.css'
const MyModel = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModel]

  if (visible) {
    rootClasses.push(cl.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModelContent} onClick={(e) => e.stopPropagation()}>
        <RiCloseFill
          onClick={() => setVisible(false)}
          className={cl.crossRight}
        />
        {children}
      </div>
    </div>
  )
}

export default MyModel
