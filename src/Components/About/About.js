import React from 'react'
import User from './UserIntroCard/User.js'
import clasess from  './About.module.css'
export default function About() {
  return (
    <React.Fragment>
    <div className={clasess.container}>
    <div className={clasess.item1}>
      <User/>
    </div>
    <div className={clasess.item2}>
    <User/>
    </div>
  </div>
  <div className={clasess.Infocontainer}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae culpa magni molestiae alias explicabo? Autem debitis eos laudantium accusantium officiis voluptates animi repudiandae alias qui molestiae soluta laboriosam ex tempora repellendus doloremque, magni sequi velit, distinctio eligendi reprehenderit nam voluptatibus ullam blanditiis quos! Dicta reiciendis quaerat sunt cupiditate earum explicabo corporis alias laborum mollitia nulla, illo nobis molestiae blanditiis culpa eligendi necessitatibus porro obcaecati repellat iure possimus cumque, voluptas aspernatur. Ipsum delectus sunt quo tenetur, inventore dolore enim totam accusantium animi quidem iste, mollitia distinctio veniam sed cum recusandae ut esse repudiandae nihil vel ullam sequi. Enim, aspernatur iure. Quis molestiae amet veritatis qui suscipit placeat officia modi similique laborum saepe mollitia perspiciatis rerum quas vero recusandae, labore iusto, incidunt deleniti odit impedit! Excepturi, fugiat quo! Blanditiis explicabo fuga iusto cum a porro alias? Expedita, iusto, quidem cum aspernatur veritatis, explicabo quibusdam repudiandae ratione qui laborum accusamus impedit assumenda illo.
  </div>
  </React.Fragment>
  )
}

