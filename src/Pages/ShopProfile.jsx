import React from 'react'
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { AnnounceBlock } from '../Components/AnnounceBlock';
import { ShopSideProfile } from '../Components/Web/ShopSideProfile';
import { Appointment } from '../Components/Web/Appointment';
import { Services } from '../Components/Web/Services';
import { Staff } from '../Components/Web/Staff';
import { Announcements } from '../Components/Web/Announcements';
import { Contacts } from '../Components/Web/Contacts';

import { MdArrowLeft } from "react-icons/md";
import css from './ShopProfile.module.css';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { announcements , popularShops } from '../Data/data';

export const ShopProfile = () => {
    
    const { t } = useTranslation();
    const [ arrow , setArrow ] = useState(-1);
    const [ height_Top , setHeight_Top ] = useState('200px');
    const [mContent , setMContent] = useState(<Appointment/>)



    return (
    <>
    <Navbar/>
    <div className={css.Container}>
        <div style={{ '--height-Top' : height_Top }} className={css.Top}>
                <div className={css.Announcements}>
                  {announcements.map((item)=>(
                    <AnnounceBlock announce={item} short={true} mContentChanger={setMContent}/>
                  ))}
                </div>
                <MdArrowLeft className={css.Arrow_Button}
                             style={{'--scale-Index' : arrow}} 
                             onClick={()=>{
                                setHeight_Top(height_Top === '200px' ? '350px' : '200px');
                                setArrow(arrow === 1 ? -1 : 1);
                             }} />
        </div>
        <div className={css.Bottom}>
                <div className={css.Profile_SideBar}>
                    <ShopSideProfile shopID={popularShops[1]} mContentChanger={setMContent}/>
                </div>
                <div className={css.Wrapper}>
                             <div className={css.Nav_Menu}>
                                  <button className={css.Nav_Menu_B} onClick={()=>{setMContent(<Appointment/>)}}>
                                    {t('Pages.ShopProfile.NavMenu_Buttons.Appointment')}</button>
                                  <button className={css.Nav_Menu_B} onClick={()=>{setMContent(<Services/>)}}>
                                    {t('Pages.ShopProfile.NavMenu_Buttons.Services')}</button>
                                  <button className={css.Nav_Menu_B} onClick={()=>{setMContent(<Staff/>)}}>
                                    {t('Pages.ShopProfile.NavMenu_Buttons.Staff')}</button>
                                  <button className={css.Nav_Menu_B} onClick={()=>{setMContent(<Announcements/>)}}>
                                    {t('Pages.ShopProfile.NavMenu_Buttons.Announcement')}</button>
                                  <button className={css.Nav_Menu_B} onClick={()=>{setMContent(<Contacts/>)}}>
                                    {t('Pages.ShopProfile.NavMenu_Buttons.Contacts')}</button>
                             </div>
                             <div className={css.Menu_Content}>
                                  { mContent }
                             </div>
                </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
