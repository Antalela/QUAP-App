import React, { useState } from 'react';

import Navbar from '../Components/Navbar'
import css from './Login.module.css';
import { useTranslation } from 'react-i18next';




export const Login = () => {
  
  const { t } = useTranslation();
  const [platform_Index , set_Platform_Index] = useState(0);

  const custom_Style = {
    margin:'2%',
    width:'fit-content'
  }
    
  return (
    <>
    <Navbar/>
    <div className={css.Container}>
      <div className={css.Back_Platform}>
        <div className={css.Login}>
                <span className={css.Attention_Message} > {t('Login.Login.Attention_Message')} </span>
                <input className={css.Input_Box} placeholder={t('Login.Email')}/>
                <input className={css.Input_Box} placeholder={t('Login.Password')} />
                <button className={css.Button}> {t('Login.Login.Button')} </button>
                <span className={css.Forget_Password}> {t('Login.Login.Forget_Password')} </span>
                <span className={css.Attention_Message} style={{visibility:'' , color:'#bf0909d5'}} > {t('Login.Login.Wrong_Input')} </span> 
        </div>    
        <div className={css.Signin}>
              <span className={css.Attention_Message}> {t('Login.Signin.Attention_Message')} </span>
              <input class={css.Input_Box} style={custom_Style} placeholder={t('Login.Name')} />
              <input className={css.Input_Box} style={custom_Style}  placeholder={t('Login.Surname')} />
              <input className={css.Input_Box} style={custom_Style} placeholder={t('Login.Email')}/>
              <input className={css.Input_Box} style={custom_Style} placeholder={t('Login.Password')}/>
              <input className={css.Input_Box} style={custom_Style} placeholder={t('Login.Confirm_Password')}/>
              <button className={css.Button} style={{margin:'5% 50%'}}> {t('Login.Signin.Button')} </button> 
        </div>  
        <div className={css.Front_Platform} style={{transform: `translateX(${platform_Index*100}%)`}}>
              <h1 className={css.Tittle}> {t(`Login.Front_Platform.${platform_Index}.Tittle`)} </h1>
              <span className={css.Info_Text}> {t(`Login.Front_Platform.${platform_Index}.Info_Text`)} </span>
              <button className={css.Change_Platform_Button} onClick={()=>set_Platform_Index(1 - platform_Index)}> {t(`Login.Front_Platform.${platform_Index}.Button`)} </button>
        </div>
      </div>
    </div>
    </>
  )
}
