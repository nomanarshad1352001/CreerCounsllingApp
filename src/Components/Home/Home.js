import React from 'react'
import Intro from '../Introduction/Intro.js'
import clasess from './Home.module.css'
export default function Home() {
  return (
    <div className={clasess.container}>
      <div className={clasess.item1}>
        <Intro/>
      </div>
      <div className={clasess.item2}>
      <Intro/>
      </div>
    </div>
  )
}
