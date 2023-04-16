import React from 'react'

import css from './AnnounceBlock.module.css'
import { Announcements } from './Web/Announcements'

export const AnnounceBlock = ({announce , short , mContentChanger}) => {

  return (
    <div className={css.Container}>
        <div className={css.Top}>
            <h3 className={css.Title}> {announce.title} </h3>
            <p className={css.Date}> {announce.date} </p>
        </div>
        <div className={css.Center}>
            <div className={css.announce}>
              {  short && announce.announce.length > 236
                 ? `${announce.announce.substr(0,235)} ...continues`
                 :  announce.announce
              }
            </div>
        </div>
        <div className={css.Bottom}>
            <button className={css.Detail_Button} onClick={()=>mContentChanger(<Announcements/>)}>See More</button>
        </div>
    </div>
  )
}
