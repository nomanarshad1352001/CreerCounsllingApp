import React from 'react'
import Button from '../UI/Button'
import clasess from './User.module.css'
export default function User() {
  return (
    <div>
      <div className={clasess.slidecontainer}>
        <div className={clasess.slidecontent}>
          <div className={clasess.cardwrapper}>
            <div className={clasess.card}>
              <div className={clasess.imagecontent}>
                <span className={clasess.overlay}></span>
                <div className={clasess.cardimage}>
                  <img src="images/profile1.jpg" alt="" className={clasess.cardimg} />
                </div>
              </div>
              <div className={clasess.cardcontent}>
                <h2 className={clasess.name}>David Dell</h2>
                <p className={clasess.description}>The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                <Button/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}