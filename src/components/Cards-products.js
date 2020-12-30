import React from 'react'
import CardItem from './CardItem';

import snsAnalyticsImage from '../images/SNSAnalyticsImage.jpg';
import jiroLensImage from '../images/jiroLens.jpg';
import instaDiaryImage from '../images/instaDiary.jpg';
import pointBundleImage from '../images/pointBundle.jpg';
import './Cards.css';

function CardsProducts() {
    return (
        <div className="cards">
            <h1>How can we start with?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            img={snsAnalyticsImage}
                            title='Social Listening'
                            text='SNSデータを分析するツールです'
                            // link='/sns-analytics'
                            link="/maintenances"
                        />
                                                
                        <CardItem 
                            img={jiroLensImage}
                            title='JIRO Lens'
                            text='JIROの写真から店名を分析することができるツールです'
                            // link='/jiro-lens'
                            link="/maintenances"
                        />
                        <CardItem 
                            img={instaDiaryImage}
                            title='InstaDIARY'
                            text='Instagramと連携して日記を作ることができます'
                            // link='/insta-diary'
                            link="/maintenances"
                        />
                        <CardItem 
                            img={pointBundleImage}
                            title='Point Bundle'
                            text='ポイントカードを登録して忘れないようにします'
                            // link='/point-bundle'
                            link="/maintenances"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProducts
