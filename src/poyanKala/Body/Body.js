import { Slider } from "../Components/Slider/Slider"
import { LatestProducts } from "../Components/LatestProducts/LatestProduct"
import { InstantOffer } from "../Components/InstantOffer/InstantOffer"
import { Ps5Product } from "../Components/Ps5Products/Ps5Product"
import { AnvaeImg } from "../Components/AnvaeImg/AnvaeImg"
import { Brand } from "../Components/Brand/Brand"
import { BackToUp } from "../Components/BackToUp/BackToUp"
import { Header } from "../Header/Header"
import { Navmenu } from "../Components/NavMenu/Navmenu"
import { Footer } from "../Footer/Footer"
export const Body = ()=>{
    return(
        <div>
            <Header/>
            <Navmenu/>
            <Slider/>
            <LatestProducts/>
            <Ps5Product/>
            <AnvaeImg/>
            <Brand/>
            <BackToUp/>
            <Footer/>
        </div>
    )
}