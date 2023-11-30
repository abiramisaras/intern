import React from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import {  BiMessageAltDetail } from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import { useState } from 'react';
 
const ContactForm = () => {
  const[name,setName]=useState("abi");
  const[email,setEmail]=useState("abi");
  const[text,setText]=useState("abi");



  const onViaCallSubmit=()=>{
    console.log("Helo this is abi!");
  }
  const[name,setName]=useState("abi");

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="via support chat" icon={< BiMessageAltDetail fontSize="24px"/>}
        />
              <Button onClick={onViaCallSubmit} text=" via call" icon={< BsFillTelephoneFill fontSize="24px"/>}/>

        </div>
        <Button isOutline={true} text=" via email form" icon={< MdEmail fontSize="24px"/>}/>
        <form  onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name"> Name </label>
          <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
          <label htmlFor="email"> e-mail </label>
          <input type="email" name="email" />
          </div><div className={styles.form_control}>
          <label htmlFor="text"> Text </label>
          <textarea name="text" rows="10"></textarea>
          </div>
          <div 
          style={{
            display:"flex",
            justifyContent:"end",}}
          >
          <Button  text="submit"/>
          </div>

        </form>

        </div>
      
  <div>{name+" " + email+" "+text+" "}</div>

       <div className={styles.contact_image}>
        <img src="/images/contact.jpg" alt="contact" width="800px" height="600px"/>
        </div>
        
  
    </section>
  )
}

export default ContactForm;