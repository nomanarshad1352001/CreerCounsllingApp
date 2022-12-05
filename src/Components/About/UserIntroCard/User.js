import React from 'react'
import Button from '../../UI/Button.js'
import clasess from './User.module.css'
// import asad from '../../Material/asad.jpg'
export default function User() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className={clasess.card}>
              <div className={clasess.imagecontent}>
                <span className={clasess.overlay}></span>
                <div className={clasess.cardimage}>
                  {/* <img src={asad} alt="" className={clasess.cardimg} /> */}
                </div>
              </div>
              <div className={clasess.cardcontent}>
                <h2 className={clasess.name}>Nouman</h2>
                <p className={clasess.description}>Web Developer</p>
                <p className={clasess.description}>I am interested in a challenging and responsible position with an organization of repute which appreciates good performance and hardworking employees.</p>
                {/* <a href="https://asadyasin.github.io/portfolio" target="_blank" rel="noreferrer"> */}
                <Button padding='5px' color="#54BAB9" btnTitle="More"></Button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}