import React from 'react'
import Intro from '../Introduction/Intro'
// import User from '../UserIntroCard/User'
import clasess from './Admin.module.css'

export default function Admin() {
  return (
    <div className={
      clasess.container
    }>
      <Intro/>
      <Intro/>
      <Intro/>
      <Intro/>
      <Intro/>

    </div>
  )
}
