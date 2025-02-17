import React from 'react'
import styles from "./project.module.css"

const Projects = () => {
  return (
     <div id='project_container' style={{display:'flex', flexDirection:'column', gap:"1rem"}}>
     <h1>Projects</h1>
     <div className={styles.project_wrapper}>
     <img src='https://cdn.dribbble.com/userupload/29917881/file/original-35f0b0aeadd6bce5648a5a77c960f512.jpg?format=webp&resize=640x480&vertical=center' alt='project'/>
     
     <img src='https://cdn.dribbble.com/userupload/29878892/file/still-55071c409147fc6b52788160b8ca916d.png?format=webp&resize=640x480&vertical=center' alt='project'/>
     <img src='https://cdn.dribbble.com/userupload/26525335/file/original-c3df5af9fa275f70584a4555e7ef576e.png?format=webp&resize=640x480&vertical=center' alt='project'/>
     <img src='https://cdn.dribbble.com/userupload/29997232/file/original-b403cd47d1b36fb199c79637e73802d4.jpg?format=webp&resize=640x480&vertical=center' alt='project'/>

     </div>
     </div> 
  )
}

export default Projects
