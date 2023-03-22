import React from 'react'

import {TbSearch , TbLanguage } from 'react-icons/tb';
import {IoPersonSharp} from "react-icons/io5"

import './NavbarCSS.css'

import { useTranslation, Trans } from 'react-i18next';
import i18n from '../i18next/i18n';

const Navbar = () => {

    const { t } = useTranslation();

    return(
           <div className='Navbar_Container'>
                <div className='Left'>
                    <img className='Logo' src={require('./Logo.png')} alt='Qapp'></img>
                </div>
                <div className='Middle'>
                    <div className='SearchBar'>
                        <input className='Search-Bar-Input' placeholder={t('navbar.Search')}></input>
                        <TbSearch className='Search-Icon'></TbSearch>
                    </div>
                </div>
                <div className='Right'>
                    
                    <IoPersonSharp className='Account-Icon'/>
                    <button className='ContactUs-Button'>{t('navbar.ContactUs')}</button>
                    <div className='Languages'>
                      <TbLanguage className='Language-Icon'/>
                      <select className='Select' 
                              onChange={(event)=>{ i18n.changeLanguage(event.target.value)}}>

                        <option className='Options' value="eng" selected>ENG</option>
                        <option className='Options' value="tr">TR</option>
                        <option className='Options' value="ru">RU</option>
                      </select>
                    </div>
                </div>
           </div>
    );
}

export default Navbar; 