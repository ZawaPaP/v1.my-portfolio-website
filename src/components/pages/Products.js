import React from 'react'
import '../../App.css'
import CardsProducts from '../Cards-products'
import Footer from '../Footer'

export default function Products(){
return (
        <>
            <h1 className="products">PRODUCTS</h1>  
            <CardsProducts />
            <Footer />
        </>
    )
}