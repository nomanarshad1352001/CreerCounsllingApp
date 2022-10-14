import React from 'react'
import clasess from './User.module.css'
export default function User() {
  return (
    <div>
    <div className={
      clasess.wrapperGrid
    }>
      <div className={
      clasess.container
    }>
        <div className={
      clasess.bannerImg
    }></div>
        <img src='https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='profile image' className={clasess.profileImg}/>
        <h1 className={
      clasess.name
    }>Anna Marie</h1>
        <p className={clasess.description}>Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
        <button className={clasess.btn}>Follow</button>
      </div>
    </div>
</div>
  )
}