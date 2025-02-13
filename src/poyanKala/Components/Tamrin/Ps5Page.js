import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImg";
import AddToCartButton from "./AddToCartButton";
import './Ps5Page.css'
import { Title } from "./Title";
import { Navmenu } from "../NavMenu/Navmenu";
import { Footer } from "../../Footer/Footer";
export const Ps5Page = ()=>{
    return(
        <React.Fragment>
        <Navmenu/>
        <Title/>
        <div className="containert0">
           
            <ProductInfo/>
            <ProductImage/>
            <AddToCartButton/>
            
        </div>
        <Footer/>
        </React.Fragment>
    )
}