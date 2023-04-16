import React from 'react'

import css from './ShopSideProfile.module.css'

import { Link } from 'react-router-dom'
import { MdLocalPhone, MdOutlineMap } from "react-icons/md";
import { FaInstagram , FaMoneyBillWave } from "react-icons/fa";
import { popularShops } from '../../Data/data'

import { useTranslation } from 'react-i18next';

import { Services } from './Services';
import { Contacts } from './Contacts';

export const ShopSideProfile = ({shopID , mContentChanger}) => {

    const { t } = useTranslation();

return (
    <div className={css.Container}>
        <img className={css.Profile_Img} src={shopID.img}/>
        <p className={css.Profile_Name}> {shopID.name} </p>
        
        <div className={css.Contacts}>
            <button className={css.Contacts_Button} onClick={()=>mContentChanger(<Services/>)}>
            <FaMoneyBillWave className={css.Contacts_Icon} />    
            Prices
            </button>
            <button className={css.Contacts_Button} onClick={()=>mContentChanger(<Contacts/>)}>
            <MdOutlineMap className={css.Contacts_Icon}/>    
            Adress
            </button>
            <Link style={{marginRight:'10px' , color:'rgb(0,0,0,0)'}} to={'tel:+905389769334'} rel='noopener noreferrer'>
                <button className={css.Contacts_Button} onClick={()=>mContentChanger(<Contacts/>)}>
                    <MdLocalPhone className={css.Contacts_Icon}/>    
                    Phone   
                </button>
            </Link>
            <Link style={{marginRight:'10px'}} to={'https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react'} target='_blank' rel='noopener noreferrer'> 
                <button className={css.Contacts_Button} >
                    <FaInstagram className={css.Contacts_Icon} style={{marginRight: '10%'}}/>    
                    Instagram
                </button>
            </Link>
        </div>

        <div className={css.Work_Plan} >
            <p className={css.Work_Plan_Title}> Works</p>
            {shopID.work_days.map((days , index)=>(
                <div className={css.Week_Table}>
                  <div className={css.Days}>
                        {`${t(`ShopSideProfile.Work_Days.${index+1}`)}`}
                  </div>
                  <div className={css.Hours}>
                        {days[index+1]}
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}
