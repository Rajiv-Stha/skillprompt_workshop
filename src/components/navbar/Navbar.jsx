import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div id={styles.navbar}>
      <ul className={styles.navLink}>
        <li>Home</li>
        <li>About Me</li>
        <a href='#project_container'>

        <li>Projects</li>
        </a>
        <li>Skills</li>
        <li>Contact</li>
        <a href='https://github.com/Rajiv-Stha' target='_blank'>

        <li>
            <button id={styles.hireBtn}>Hire</button>
        </li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
