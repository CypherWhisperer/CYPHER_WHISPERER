import styles from './Footer.module.scss';
import React from 'react';

// DATA
import { socialLinks,socialLinksIcons } from '../../assets/data';

export default function Footer() {
  return(
    <>
      <footer className={styles.footer_content}>
        <SocialLinks />
      </footer>
    </>
  )
}


function SocialLinks() {
    return (
        <ul className={styles.social_links_container}>
            {/* <li className={styles.separator} /> */}
            <li className={styles.links}>
                {socialLinks.map((link, iconIndex) => {
                    return(
                        <a key={link.id} href={link.target} aria-label={link.name}> 
                          {/* This avoids pre-instantiating JSX elements with fixed keys, and makes mapping clearer.*/}
                          {React.createElement(socialLinksIcons[iconIndex])}
                        </a>
                    )
                })}
            </li>
            <li> <small> &copy; 2025, all rights reserved </small> </li>
        </ul>
    )
}

