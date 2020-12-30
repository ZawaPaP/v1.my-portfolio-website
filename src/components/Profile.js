import React from 'react'
import { Card } from "react-bootstrap";

import profileImage from '../images/profileImage.jpg';
import iconImage from '../images/owl-black.png';

import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <h1>What do we look like?</h1>
            <div className="profile__container">
              <>
                <Card bsPrefix="profile__item">
                <div className="profile__icon__text-wrapper">
                  <Card.Header className="profile__icon__header">Our Vision</Card.Header>
                  <Card.Body  className="profile__icon__body">
                  <Card.Text className="profile__icon__text">
                    シマフクロウは日本では北海道のみに生息する日本最大のフクロウです。古くはアイヌ語で“コタンコロカムイ（村を守る神）”や“カムイチカプ（神の鳥）”と呼ばれ村を邪悪や災害から守る特別な存在とされてきました。その大きな目でどのような暗闇も見通し未来を切り開く、我々はビジネスを通じて全てのお客様にとってそのような存在となれるように日々邁進していきます。
                  </Card.Text>
                  </Card.Body>
                </div>
                <div className="profile__icon__img-wrapper">          
                  <Card.Img src={iconImage} className="profile__icon__img"/>
                </div>
                </Card>  
              </>
            </div>
            <h1>About Me</h1>
            <div className="profile__container">
            <>
          <Card bsPrefix="profile__item">
          <div className="profile__item__img-wrapper">          
            <Card.Img src={profileImage} className="profile__item__img"/>
          </div>
          <div className="profile__item__text-wrapper">
            <Card.Header className="profile__item__header">Profile</Card.Header>
            <Card.Body  className="profile__item__body">
            <Card.Title className="profile__item__title">Kazuhide Izawa</Card.Title>
            <Card.Text className="profile__item__text">
            1994年北海道生まれ。北海道大学卒業後、広告代理店にてデジタルマーケティングに従事。
            データ分析やプロダクトマネジメントを得意分野とし、趣味で簡単なプログラミングなども行う。
            Chill & Peace をモットーにデジタルが創る世界の公平性と未来を夢見て日々踊っている。将来の夢はDJとして世の中をぶち上げること。
            </Card.Text>
            </Card.Body>
          </div>
          </Card>  
        </>
            </div>
        </div>
    )
}

export default Profile
