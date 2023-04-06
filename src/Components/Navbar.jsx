import React from 'react'

import {TbSearch , TbLanguage } from 'react-icons/tb';
import {IoPersonSharp} from "react-icons/io5"

import css from'./Navbar.module.css'

import { useTranslation} from 'react-i18next';
import i18n from '../i18next/i18n';

const Navbar = () => {

    const { t } = useTranslation();

    return(
           <div className={css.Navbar_Container}>
                <div className={css.Left}>
                    <img className={css.Logo} src={require('./Logo.png')} alt='Qapp'></img>
                </div>
                <div className={css.Middle}>
                    <div className={css.SearchBar}>
                        <input className={css.Search_Bar_Input} placeholder={t('navbar.Search')}></input>
                        <TbSearch className={css.Search_Icon}></TbSearch>
                    </div>
                </div>
                <div className={css.Right}>
                    
                    <IoPersonSharp className={css.Account_Icon}/>
                    <button className={css.ContactUs_Button}>{t('navbar.ContactUs')}</button>
                    <div className={css.Languages}>
                      <TbLanguage className={css.Language_Icon}/>
                      <select className={css.Select} 
                              onChange={(event)=>{ i18n.changeLanguage(event.target.value)}}>

                        <option className={css.Options} value="eng" selected>ENG</option>
                        <option className={css.Options} value="tr">TR</option>
                        <option className={css.Options} value="ru">RU</option>
                      </select>
                    </div>
                </div>
           </div>
    );
}

export default Navbar; 