import React from 'react';
import styles from './Footer.css';


const Footer = (props) => {
  const lang = props.data;
  let text = {};
  let new_text = {};
  text.p = [
    "All rights reserved",
    "Все права защищены"
  ];
  if(lang === "ru"){
    new_text.p = text.p[1]
  }else{
    new_text.p = text.p[0]
  }
  return (
      <footer className={styles.footer}>
        <p className={styles.footer__text}>{new_text.p}. 2014-2017.</p>
      </footer>
  )
};

export default Footer;
