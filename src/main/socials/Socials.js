import React from 'react';
import styles from "./social.css";


const Socials = (props) => {
  // console.log(props.data);
  // const language
  const lang = props.data;
  let text = {};
  let new_text = {};
  text.h1 = [
    "Feel free to communicate with us:",
    "Мы в соц.сетях"
  ];
  if(lang === "ru"){
    new_text.h1 = text.h1[1]
  }else{
    new_text.h1 = text.h1[0]
  }
  return (
    <section className={styles.social}>
        <h1 className={styles.social__header}>{new_text.h1}</h1>
        <ul className={styles.big}>
          <li className={styles.big__element}><a rel="noopener noreferrer" target="_blank" href="https://t.me/chernikapro/">telegramm</a></li>
          <li className={styles.big__element}><a rel="noopener noreferrer" target="_blank" href="https://vk.com/chernikapro">vk</a></li>
          <li className={styles.big__element}><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/chernikapro">facebook</a></li>
          <li className={styles.big__element}><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/chernikapro/">instagram</a></li>
        </ul>
    </section>
  )
};

export default Socials;
