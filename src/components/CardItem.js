import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";

function CardItem(props) {
    return (
        <>
          <Card className="cards__item" style={{width: '18rem'}}>
            <Link to={props.link} className="cards__item__link">
            <Card.Img src={props.img} className="cards__item__img"/>
            <Card.ImgOverlay className="cards__item__overlay">
            <Card.Text className="cards__item__text">
            {props.text}
            </Card.Text>
            <Card.Text  className="cards__item__cta">See Details</Card.Text>
            </Card.ImgOverlay>
            </Link>
            <Card.Body  className="cards__item__body">
            <Card.Title className="cards__item__title">{props.title}</Card.Title>
            <Card.Subtitle className="cards__item__subtitle">{props.subtitle}</Card.Subtitle>
            </Card.Body>
          </Card>  
        </>
    )
}

export default CardItem
