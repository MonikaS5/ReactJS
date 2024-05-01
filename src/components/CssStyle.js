import React, { Component } from 'react';
import styles from './Style.module.css';
import './another.css'


 class CssStyle extends Component {
  render() {
    return (
        <>
        <hr/>
        <div>CssStyle
            <h2 className={styles.heading1}> Hello, This is My External CSS file</h2>
            <h4 className={styles.heading}> External CSS file</h4>
            <p id={styles.para}> Hello world
            </p>
            <h3 className='myclass'>This is another css</h3>
        </div>
        
        </>
      
    )
  }
}

export default CssStyle