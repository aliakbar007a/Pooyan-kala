import React from 'react'
import { useEffect, useState  } from 'react'
import { TitleLapTopPage } from './component/TitleLapTapPage/TitleLapTopPage'
import { InfoLapTopPage } from './component/InfoLapTopPage/InfoLapTopPage'

import './LapTopPage.css'
import { ImgLapTopPage } from './component/ImgLapTopPage/ImgLapTopPage'
import { BuyLapTopPage } from './component/BuyLapTopPage/BuyLapTopPage'
import { Navmenu } from '../NavMenu/Navmenu'
import { Footer } from '../../Footer/Footer'

export const LapTopPage = ()=>{
    return(
        <React.Fragment>
        <Navmenu/>
        <TitleLapTopPage/>
        
        <div className='containert0'>
        <InfoLapTopPage/>
        <ImgLapTopPage/>
        <BuyLapTopPage/>
        </div>

            <Footer/>
            </React.Fragment>
    )
}