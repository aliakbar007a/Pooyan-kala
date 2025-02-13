import { Link } from 'react-router-dom'
import './Footer.css'
import  InnerBox  from '../../poyanKala/Components/FooterComponents/InnerBox/InnerBox'
import { Fragment } from 'react'
import { MiddleBar } from '../Components/FooterComponents/MiddleBar/MiddleBar'
import { FooterEmailBox } from '../Components/FooterComponents/footerEmailBox/footerEmailBox'
import { FooterInstagram } from '../Components/FooterComponents/footerEmailBox/FooterInstagram/FooterInstagram'

export const Footer = ()=>{
    return(
        
        <div className='footerSite'>
            
            <InnerBox/>
            <MiddleBar/>
            <FooterEmailBox/>
            <FooterInstagram/>
            
            
        </div>
        
    )
}