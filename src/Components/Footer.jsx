import React from 'react'

import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.Container}>
        <div className={css.Wrapper}>
            <div className={css.Description}>
                <img className={css.Logo} src={require('./Logo.png')} alt='Qapp'></img>
                <span className={css.Description_Text}> THİS DESCRIPTION IS WRITEN BY A DEVELOPER OF THIS WEB-SITE AND IT SUPPOSED TO TELL SOMETHINK OR DESCRIPTE A LOGO</span>
            </div>
            <div className={css.Useful_Links}></div>
            <div className={css.Contacts}></div>
        </div>
    </div>
  )
}
