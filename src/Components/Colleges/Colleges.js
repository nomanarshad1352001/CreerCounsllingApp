import React from 'react'
import Intro from '../Introduction/Intro.js'
import clasess from './Colleges.module.css'
export default function Colleges() {
  return (
    <div className={
        clasess.container
      }>
        <Intro
            Title="Govt Graduate College Of Science"
            subTitle="A Intermediate and Bs Level institute"
            description="Secondary education is an important segment in every person's life.  raise a person's economic status and reduce infant mortality rates as these listed facts will showSecondary education is an important segment in every person's life.  raise a person's economic status and reduce infant mortality rates as these listed facts will show"
            btnTitle='See More'
          />
          <Intro
            Title="Govt Graduate Township College"
            subTitle="A Intermediate and Bs Level institute"
            description="Secondary education is an important segment in every person's life. facts will show"
            btnTitle='See More'
          />
          <Intro
            Title="Govt graduate MAO College"
            subTitle="A Intermediate and Bs Level institute"
            description="Secondary education is an important segment in every person's life. It also serves as a means to potentially empower girls, raise a person's economic status and reduce infant mortality rates as these listed facts will show"
            btnTitle='See More'
          />
          <Intro
            Title="Govt graduate civil-line College"
            subTitle="A Intermediate and Bs Level institute"
            description="Secondary education is an important segment in every person's life. It also serves as a means to potentially empower girls, raise a person's economic status and reduce infant mortality rates as these listed facts will show"
            btnTitle='See More'
          />
          <Intro
            Title="Govt graduate Commerec College"
            subTitle="A Intermediate and Bs Level institute"
            description="Secondary education is an important segment in every person's life. It also serves as a means to potentially empower girls, raise a person's economic status and reduce infant mortality rates as these listed facts will show"
            btnTitle='See More'
          />
  
      </div>
  )
}
