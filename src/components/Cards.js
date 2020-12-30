import React from 'react'
import CardItem from './CardItem';

import servicesImage from '../images/homeImage.jpg';
import productsImage from '../images/productsImage.jpg';
import blogImage from '../images/blogImage.jpg';
import contactImage from '../images/contactImage.jpg';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>How can we start with?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            img={servicesImage}
                            title='Services'
                            text='自己紹介およびどのような取り組みをしているかを説明しています'
                            link='/services'
                        />
                                                
                        <CardItem 
                            img={productsImage}
                            title='Products'
                            text='提供しているプロダクト一覧のページです'
                            link='/products'
                        />
                        <CardItem 
                            img={blogImage}
                            title='Blog'
                            text='主にデジタル、マーケティングに関する情報を発信しています'
                            link='/blog'
                        />
                        <CardItem 
                            img={contactImage}
                            title='Contact'
                            text='個別のご連絡はこちらからお願いします'
                            link='/contact'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
