import React from 'react'

import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail , MdLocalPhone } from "react-icons/md";
import css from './Footer.module.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {

  const { t } = useTranslation();

  return (
    <div className={css.Container}>
        <div className={css.Wrapper}>

            <div className={css.Description}>
                <img className={css.Logo} src={require('./Logo.png')} alt='Qapp'></img>
                <span className={css.Description_Text}> {t('Footer.Description')} </span>
            </div>

            <div className={css.Useful_Links}>
              <p style={{fontSize :'20px' , marginTop :'5%' , fontWeight :'bold'}} > {t('Footer.UsefulLinks.Title')} </p>
              <ul className={css.Links}>
                  <li className={css.Links_Items}> {t('Footer.UsefulLinks.Terms')} </li>
                  <li className={css.Links_Items}> {t('Footer.UsefulLinks.Privacy')} </li>
                  <li className={css.Links_Items}> {t('Footer.UsefulLinks.Security')} </li>
                  <li className={css.Links_Items}> {t('Footer.UsefulLinks.About')} </li>
              </ul>
            </div>

            <div className={css.Contacts}>
              <p style={{fontSize :'20px' , marginTop :'5%', fontWeight :'bold' }} > {t('Footer.Contacts')} </p>
              <ul className={css.Contacts_List}>
                <div className={css.Contacts_Items}>
                  <Link to={'https://twitter.com/Mansur_M_'} target='_blank' rel='noopener noreferrer'>
                    <AiFillTwitterCircle className={css.Twitter_Icon}/>
                  </Link>
                    
                  <p style={{fontSize :'12px' , margin:'10px'}} >@Mansur_M_</p>
                </div>

                <div className={css.Contacts_Items}>
                  <Link to={'mailto:mavludov@gmail.com'} target='_blank' rel='noopener noreferrer'>
                    <MdEmail className={css.Email_Icon}/>  
                  </Link>
                  <p style={{fontSize :'12px' , margin:'10px'}} >mavludov@gmail.com</p>
                </div>

                <div  className={css.Contacts_Items}>
                  <Link to={'tel:+905389769334'}  rel='noopener noreferrer'>
                    <MdLocalPhone className={css.Phone_Icon}/>  
                  </Link>
                  <p style={{fontSize :'12px' , margin:'10px'}} >+905389769334</p>
                </div>
              </ul>
            </div>
            
        </div>
    </div>
  )
}
