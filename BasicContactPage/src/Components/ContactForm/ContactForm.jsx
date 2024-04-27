import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  console.log(name+" "+email+" "+text);
 
  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    alert('Information Collected, Visit Again!')
  };
  
  return (
   <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icons={<BiSolidMessageDetail fontSize="28px"/>}/>
        <Button text="VIA Call" icons={<IoCallSharp fontSize="28px" />}/>
        </div>
        <Button isOutline={true} text="VIA Email Form" icons={<MdMail fontSize="28px" />}/>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          </form>
        </div>
      <div className={styles.contact_image}>
      <img src="/images/contact.svg" alt="contact image" />
      </div>
   </section>
  )
}

export default ContactForm