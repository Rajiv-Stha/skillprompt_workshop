import React from 'react'
import styles from "./aboutme.module.css"
import { FaGithub,FaInstagram ,FaFacebook} from "react-icons/fa";


const Aboutme = () => {
  return (
    <>
    <div id={styles.aboutme}>
       <div className={styles.left_aboutme}>
      <h1>Skillprompt Pvt Ltd</h1>
      <h3>student | learner | software developer</h3>
      <p> hello how are you ai am fine yes yes hello hello wassup dsjflklorem ipsum, dlor sit aet ocnsectetur adiptk elit Sure! Here’s a random 50-word Lorem Ipsum text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
<div className={styles.socialMedia}>
<a href='https://github.com/Rajiv-Stha' target='_blank'>

<FaGithub style={{cursor:'pointer'}} size={30}/>
</a>
<a href='https://instagram.com/rajiv___shrestha' target='_blank'>
<FaInstagram style={{cursor:'pointer'}} size={30}/>
</a>
<a href='https://www.facebook.com/rajiv.shrestha.79025648/' target='_blank'>
<FaFacebook style={{cursor:'pointer'}} size={30}/>
</a>
</div>
       </div>
       <div className={styles.right_aboutme}>
        <img src='https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='image'/>
      
       </div>
    </div>
    </>
  )
}

export default Aboutme
