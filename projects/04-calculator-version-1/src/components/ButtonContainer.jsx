import React from 'react'
import styles from  './ButtonContainer.module.css'

function ButtonContainer() {

  const buttonNames = ['C','1','2','3','+','4','5','6','-','7','8','9','=','0','00','/']

  return (
    <div className={styles.buttonContainer}>
          
          {
            buttonNames.map((item)=> <button key={item} className={styles.button}>{item}</button>)
          }
        </div>
  )
}

export default ButtonContainer